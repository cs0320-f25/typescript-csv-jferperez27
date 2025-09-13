import * as fs from "fs";
import * as readline from "readline";
import * as z from "zod";

type type_return = Promise<z.ZodArray<z.ZodObject>> | Promise<string[][]>

/**
 * This is a JSDoc comment. Similar to JavaDoc, it documents a public-facing
 * function for others to use. Most modern editors will show the comment when 
 * mousing over this function name. Try it in run-parser.ts!
 * 
 * File I/O in TypeScript is "asynchronous", meaning that we can't just
 * read the file and return its contents. You'll learn more about this 
 * in class. For now, just leave the "async" and "await" where they are. 
 * You shouldn't need to alter them.
 * 
 * @param path The path to the file being loaded.
 * @param schema Zod schema to determine type values per column of data.
 * @returns a "promise" to produce a 2-d array of cell values
 * 
 */
export async function parseCSV(path: string, schema: z.ZodType, width: number): Promise<type_return> {
  // This initial block of code reads from a file in Node.js. The "rl"
  // value can be iterated over in a "for" loop. 
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // handle different line endings
  });
  
  // Create an empty array to hold the results
  let result = []

  // Creates an empty array to hold tuples of data for zod schema
  let rows = []
  
  // We add the "await" here because file I/O is asynchronous. 
  // We need to force TypeScript to _wait_ for a row before moving on. 
  // More on this in class soon!
  for await (const line of rl) {
    const values = line.split(",").map((v) => v.trim());

    // Populates "tuples" with tuples of data
    let index = 0
    while (index != values.length) {
      let iter_index = index
      let row_data = []

      while (iter_index != index + width) {
        row_data.push(values[iter_index])
        iter_index += 1
      }

      rows.push(row_data)
      index = index + width
    }

    if (schema != undefined) {
        for (const row in rows) {
          let data = schema.parse(row)
          result.push(data)
        }
    }
    else {
      result.push(values)
    }
  }
  return result
}

export const PersonRowSchema = z.tuple([z.string(), z.coerce.number()])
const test = PersonRowSchema.transform( tup => ({name: tup[0], age: tup[1]}))


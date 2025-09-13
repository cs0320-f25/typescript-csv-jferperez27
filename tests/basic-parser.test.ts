import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import * as z from "zod"

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const COMMA_CSV_PATH = path.join(__dirname, "../data/comma.csv")


test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV parses strings containing comma", async() => {
  const results = await parseCSV(COMMA_CSV_PATH)
  expect(results[1]).toEqual(["Once upon a time, in a land far, far away...", "Bartholomew the Second"])
})

test("parseCSV does not return simple string array", async() => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  expect(results).not.toBeInstanceOf(Array<String>)
})

test("parseCSV returns array with object", async() => {
  const person = z.object({
    name : z.string(),
    age : z.number()
  })
  const people = z.array(person)

  const results = await parseCSV(PEOPLE_CSV_PATH)
  expect(results).toBeInstanceOf(people)
})

test("parseCSV does not include headers in returned array", async() => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  expect(results.length).toBe(4) // Excluding header row.
})
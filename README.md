# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

    - I want to be able to specify types for each column
    - CSV parser should take in my column names alongside their specified
    type value
    - Allow the ability to include commas in strings
    - Lack of logic for CSV without headers (if types are declared prior to parsing)

- #### Step 2: Use an LLM to help expand your perspective.

    **First Prompt: Default Prompt from Sprint Handout**

    - There was definitely some overlap in features, such as quoted fields and
    type conversion.
    - Something that the LLM pointed out was the use of line breaks. I hadn't
    thought of this and would be important to ensure formatting stays consistent
    when parsing CSV files.
    - The LLM missed the point at first by listing both: features/edge cases
    and developer usability. Although suggesting unit testing and proper
    documentation is not necessarily bad advice, it wasn't what I was asking
    at first regarding improvements to the actual parsing logic.


    **Second Prompt: Altered Prompt**

    Prompt: “I’m working on a CSV parser in TypeScript that currently accepts a 
    filename as input and converts rows into strings or objects. What are some 
    missing features or edge cases that I should consider? What are some faults 
    in my parsing logic that I should be including in my program?”

    - For this prompt, I specifically stated that I wanted feedback for program
    logic.

    - Through these changes to the prompt, I was able to get a list of solely
    edge cases and faults through parsing logic to be aware of, which I found
    significantly more helpful than the previous output.


    **Third Prompt: Ask Prompt**

    Prompt: “I’m working on a CSV parser in TypeScript that currently accepts a
    filename as input and converts rows into strings or objects. What are some
    missing features or edge cases that I should consider? What are some faults
    in my parsing logic that I should be including in my program? Ask me a 
    clarifying questions about my implementation to better understand any faults 
    in my current logic."

    - For this prompt, I simply added that the LLM should ask questions
    regarding the current implementation of my CSV parser. Instead of getting
    one clarifying question (which I should've clarified in my prompt), the
    model asked how my implementation was meeting a list of edge cases that the
    parser should be accounting for.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    - Handling empty/missing values (Functionality, LLM)
        - User Story:
            As a user, I can feed in a CSV with partial data into the CSV parser so I can visualize the missing data.

    - Quoted fields handling (Functionality, Both)
        - User Story:
            As a user, I can include quotes or any piece of data with quotation marks so I can parse my file without having to worry about my data being malformed.
    
    - Type inference / type conversion (Extensibility, Both)
        - User Story:
            As a user, I can declare types per column so I can ensure my data is consistently parsed and no rows contain incorrect types.

    - Handling line breaks (Functionality, LLM)
        - User Story:
            As a user, I can add line breaks to my data so I can consistently render these line breaks even after parsing through a CSV parser.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
https://github.com/cs0320-f25/typescript-csv-jferperez27
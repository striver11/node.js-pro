
/* 
4. Asynchronous Batch File Processing
Suppose you need to process multiple files asynchronously, 
like reading data from multiple log files and writing the results to a summary file.

Scenario:
You have multiple log files, and you want to read their contents asynchronously and 
write a summary to a file.

 */





// Import the fs module with promises support and the path module
import fs from 'fs/promises';
import path from 'path';

// Function to process log files
async function processLogs(logFiles) {
    try {
        // Create an array of promises for reading each log file
        const readPromises = logFiles.map(file => fs.readFile(path.join('./Logs', file), 'utf-8'));

        // Wait for all files to be read
        const logContents = await Promise.all(readPromises);

        // Combine all logs into one summary
        const combinedLogs = logContents.join('\n');
        await fs.writeFile('./Logs/summary.txt', combinedLogs);

        console.log('Log files successfully processed and summary written to summary.txt');
    } catch (err) {
        console.error('Error processing log files:', err);
    }
}

// List of log files to process
const logFiles = ['log1.txt', 'log2.txt', 'log3.txt'];

// Start processing the log files
processLogs(logFiles);

// Log a message indicating that processing has started
console.log('Started processing log files...');


//=======================================output

/* 
PS C:\nodejs> node 6_6_asynchronous_nature_example.js
Started processing log files...
Log files successfully processed and summary written to summary.txt

 */



//------------------------------------explanation



/* 

The code is designed to read multiple log files, combine their contents, and write a summary to a new file named summary.txt. Here’s a thorough explanation:

Code Breakdown

1. Module Imports
javascript
Copy code
const fs = require('fs').promises;
const path = require('path');
fs Module: This is the Node.js file system module. By using require('fs').promises, 
you're accessing the Promise-based methods of the fs module, which allows for asynchronous 
file operations. This means that operations like reading and writing files return promises,
 enabling the use of async/await for cleaner and more manageable asynchronous code.

path Module: This module provides utilities for working with file and directory paths.
 It is used to ensure that file paths are constructed correctly across different
  operating systems (e.g., Windows vs. Unix-based systems).


2. Asynchronous Function to Process Logs
javascript
Copy code
async function processLogs(logFiles) {
    try {
        const readPromises = logFiles.map(file => fs.readFile(path.join('./Logs', file), 'utf-8'));
async function processLogs(logFiles): This defines an asynchronous function named processLogs that takes an array of log file names as its parameter. Declaring the function as async allows you to use await inside it, making it easier to handle asynchronous operations.

logFiles.map(...): The map method is used to create an array of promises by reading each log file. 
For each file in the logFiles array, fs.readFile is called, which returns a promise.

path.join('./Logs', file): This combines the directory path (./Logs) and the file name 
to create a complete path to each log file. Using path.join ensures that the file path 
is constructed correctly based on the operating system.


3. Awaiting All File Reads
javascript
Copy code
        const logContents = await Promise.all(readPromises);
Promise.all(readPromises): This takes an array of promises (the ones returned by fs.readFile)
 and waits for all of them to resolve. This means the function will not proceed until
 all log files have been read successfully. The resolved values will be stored in the logContents array.



4. Combining Logs
javascript
Copy code
        const combinedLogs = logContents.join('\n');
        await fs.writeFile('./Logs/summary.txt', combinedLogs);
logContents.join('\n'): This combines all the contents of the read log
 files into a single string, separating each log entry with a newline character (\n).
  This is useful for formatting the summary nicely.

fs.writeFile('./Logs/summary.txt', combinedLogs): This writes the combined log contents
 to a new file named summary.txt in the ./Logs directory. If the file already exists,
  it will be overwritten.


5. Error Handling
javascript
Copy code
    } catch (err) {
        console.error('Error processing log files:', err);
    }
}
try...catch Block: This structure is used to handle any errors that might occur during
 the asynchronous operations. If any of the file reads or writes fail, the error will be caught,
  and an appropriate message will be logged to the console.


6. Calling the Function
javascript
Copy code
const logFiles = ['log1.txt', 'log2.txt', 'log3.txt'];
processLogs(logFiles);
const logFiles = [...]: This creates an array containing the names of the log
 files that you want to process.

processLogs(logFiles): This calls the processLogs function,
 passing in the array of log files for processing.


7. Starting Message
javascript
Copy code
console.log('Started processing log files...');
console.log(...): This logs a message to the console indicating that 
the processing of log files has started. This message is printed immediately
 after calling processLogs(logFiles) and does not wait for the logs to be processed, 
 demonstrating the asynchronous nature of the operation.

Summary of Functionality
Asynchronous Processing: The use of async/await allows for non-blocking I/O operations.
 This means the program can continue executing other code while waiting for file reads and 
 writes to complete.
Modular Design: The code is structured in a way that makes it easy to understand and maintain,
 with separate responsibilities for reading files, processing data, and writing output.

Error Handling: The try...catch structure ensures that any errors during file processing 
do not crash the application and provide useful feedback.

Conclusion
This script is a good example of using modern JavaScript features (like Promises and async/await) to handle asynchronous operations efficiently. It demonstrates a practical application of file system operations in Node.js while maintaining code readability and simplicity.

 */
/* 
More Practical Use-Case: Fetching Data from an API and Writing to a File
In real-world applications, you often need to fetch data from APIs and write it to files. 
Here's an asynchronous example using fetch and fs.promises.

 */


import fs from 'fs/promises';  // ES module import
import fetch from 'node-fetch'; // ES module import

// Fetch data from a public API asynchronously (Dog CEO API)
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(async (data) => {
        console.log('Fetched data:', data);

        
        // Create content to write
        let content = `Fetched Dog Image URL:\n${JSON.stringify(data, null, 2)}\n\nDate fetched: ${new Date()}`;

        // Append the fetched data to output.txt asynchronously
        try {
            await fs.appendFile('./Files/output.txt', content);
            console.log('Data successfully appended to output.txt');
        } catch (err) {
            console.error('Error appending data to file:', err);
        }
    })
    .catch(err => {
        console.error('Error fetching data:', err);
    });

console.log('Fetching data from the API...');




/* 

This program demonstrates how to use asynchronous programming in Node.js to 
fetch data from a public API and append that data to a file. Here's a breakdown 
of the key components of the code and how the asynchronous nature improves its performance and efficiency.

Code Explanation
Imports:

javascript
Copy code
import fs from 'fs/promises';  // ES module import for file system operations
import fetch from 'node-fetch'; // ES module import for making HTTP requests
The program uses the fs/promises module to perform file operations asynchronously.
 This module provides promise-based versions of file system methods.
The node-fetch package is imported to make HTTP requests to an external API. 
This is a lightweight module that mimics the fetch API available in browsers.

Fetching Data:

javascript
Copy code
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
The fetch function initiates a request to the Dog CEO API to get a random dog image. 
It returns a promise that resolves to a response object.
The first .then() method converts the response to JSON format. 
This is also an asynchronous operation and returns another promise.
Processing Fetched Data:

javascript
Copy code
.then(async (data) => {
    console.log('Fetched data:', data);
    ...
In the second .then(), an async function is defined to handle the JSON data once it's fetched. 
This async function can use await to work with promises conveniently.
The fetched data is logged to the console for visibility.
Creating Content for the File:

javascript
Copy code
let content = `Fetched Dog Image URL:\n${JSON.stringify(data, null, 2)}\n\nDate fetched: ${new Date()}`;
A string is created that contains the URL of the fetched dog image,
 formatted nicely as JSON and with a timestamp of when the data was fetched.
Appending Data to a File:

javascript
Copy code
try {
    await fs.appendFile('./Files/output.txt', content);
    console.log('Data successfully appended to output.txt');
} catch (err) {
    console.error('Error appending data to file:', err);
}
The program attempts to append the content to output.txt using the fs.appendFile() method,
 which is also asynchronous. The await keyword is used to pause the
  execution of the async function until the file operation is complete.
If the operation is successful, a confirmation message is logged. 
If there’s an error (like if the directory doesn’t exist), it is caught and logged.
Error Handling for Fetch:

javascript
Copy code
.catch(err => {
    console.error('Error fetching data:', err);
});
If any error occurs during the fetching or processing of data, it is caught and logged to the console.
Initial Console Log:

javascript
Copy code
console.log('Fetching data from the API...');
This message is logged immediately to indicate that the fetch operation has started.


How Asynchronous Nature Improves the Code?


Non-Blocking Operations:

The use of promises allows the program to perform other tasks while waiting for operations
 (like fetching data or writing to a file) to complete. This prevents blocking the main thread and improves performance.


Better Resource Utilization:

While the program is waiting for the HTTP request to return or for the file operation to complete,
 it can handle other tasks, such as logging messages. This is particularly beneficial for I/O-bound operations,
  which are common in network requests and file handling.


Improved Readability:

The use of async/await syntax (like in the await fs.appendFile(...) line) makes the code easier to read and 
maintain compared to traditional callback-based approaches. It allows you to write asynchronous code 
in a way that resembles synchronous code, thus improving its structure.

Error Handling:

Promises allow for cleaner error handling using .catch() blocks, 
which can be more intuitive compared to handling errors through nested callbacks.
Conclusion
In summary, the asynchronous nature of the code enables 
efficient handling of I/O operations without blocking the main execution thread,
 which is essential for building scalable and responsive applications.
  This approach is especially important in Node.js,
   where single-threaded architecture can become a bottleneck if blocking operations are not managed properly.


 */




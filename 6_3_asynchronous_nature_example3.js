
/* 
1. Asynchronous HTTP Requests with API Interaction
In modern applications, you often make HTTP requests to APIs to retrieve or send data.

Scenario:
You need to fetch data from a public API, process it, and store the processed data into a file. 
This is a common use case when integrating with third-party services.

 */

// Importing required modules
import fs from 'fs/promises'; // Using promises version of fs module
import fetch from 'node-fetch'; // Importing node-fetch for making HTTP requests

// Asynchronous function to fetch and store data
async function fetchAndStoreData() {
    try {
        // Fetch data from a public API (JSONPlaceholder for users)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const users = await response.json();

        // Process the data (e.g., extract user names)
        const userNames = users.map(user => user.name).join('\n');

        // Write the user names to a file asynchronously
        await fs.writeFile('./Files/users.txt', `User Names:\n${userNames}`);

        console.log('User data successfully saved to users.txt');
    } catch (err) {
        console.error('Error fetching or writing data:', err);
    }
}

// Invoke the function to fetch and store data
fetchAndStoreData();

// Log a message indicating the fetching process has started
console.log('Fetching user data asynchronously...');



/* 
Explanation of Key Changes
Response Check:

The code checks if the HTTP response is successful using response.ok. 
This is important for error handling and will catch cases where the API might be down or the URL is incorrect.
Async/Await Structure:

The code uses async/await for clarity and structure, making it easier to read and understand.
Import Statement:

Make sure your file is treated as an ES module by either renaming it to use the
 .mjs extension or adding "type": "module" in your package.json.

 */


/* 
 Detailed Explanation
Import Statements:

javascript
Copy code
import fs from 'fs/promises'; // Using promises version of fs module
import fetch from 'node-fetch'; // Importing node-fetch for making HTTP requests
fs/promises: This imports the file system module that supports promises, 
allowing you to work with file operations asynchronously using async/await.
node-fetch: This library enables you to make HTTP requests in a way similar to the browser's fetch API. 
It returns a promise that resolves to the response.


Defining the Asynchronous Function:

javascript
Copy code
async function fetchAndStoreData() {
    ...
}
The function fetchAndStoreData is declared as an async function, which allows you to use await within it.
 This function will handle fetching data from the API and writing it to a file.


Using try...catch for Error Handling:

javascript
Copy code
try {
    ...
} catch (err) {
    console.error('Error fetching or writing data:', err);
}
The try...catch block is used to handle any errors that may occur during the execution of the code. 
If an error is thrown in the try block, control is transferred to the catch block, where you can log or handle the error.


Fetching Data from the API:

javascript
Copy code
const response = await fetch('https://jsonplaceholder.typicode.com/users');
The fetch function is called with the URL of the public API that returns user data.
 The await keyword pauses the execution of the function until the promise returned by fetch is resolved,
  allowing you to work with the response directly.


Checking the Response Status:

javascript
Copy code
if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
After fetching the data, the code checks if the response is successful using response.ok. This property is true
 if the response status code is in the range 200-299.
If the response is not OK, an error is thrown with the status code, which will be caught in the catch block.


Parsing the JSON Data:

javascript
Copy code
const users = await response.json();
The response.json() method reads the response body and parses it as JSON. 
Since this operation is asynchronous, it also uses the await keyword.


Processing the Data:

javascript
Copy code
const userNames = users.map(user => user.name).join('\n');
The code extracts the names of users from the JSON data using the map function.
 It creates a new array containing just the names and then joins them into a single string,
  separating each name with a newline character (\n).


Writing Data to a File:

javascript
Copy code
await fs.writeFile('./Files/users.txt', `User Names:\n${userNames}`);
The fs.writeFile() method is used to write the user names to a file named users.txt in the Files directory. 
If the file does not exist, it will be created; if it does exist, it will be overwritten.
The await keyword ensures that the file operation is completed before proceeding.


Logging Success:

javascript
Copy code
console.log('User data successfully saved to users.txt');
This message is logged to indicate that the data has been successfully written to the file.


Calling the Asynchronous Function:

javascript
Copy code
fetchAndStoreData();
This line calls the fetchAndStoreData function to execute the defined operations.


Initial Console Log:

javascript
Copy code
console.log('Fetching user data asynchronously...');
This message is logged immediately after calling the function, indicating that the process of fetching data has started. This line executes before the asynchronous operations are completed due to the nature of non-blocking I/O.
How Asynchronous Nature Helps
Non-Blocking I/O: Using asynchronous operations means that the program can handle other tasks (like logging messages) while waiting for network requests or file operations to complete. This is crucial in Node.js, where blocking the main thread can lead to performance issues.
Improved Responsiveness: The application remains responsive while waiting for data to be fetched or written to disk. This is particularly beneficial in applications that might need to serve multiple requests simultaneously.
Error Handling: By using promises and async/await, error handling becomes more straightforward and maintainable compared to traditional callback-based approaches.
Conclusion
This code effectively demonstrates how to fetch data from an API, process that data, and store it in a file asynchronously using modern JavaScript features like async/await. It’s a great example of how to leverage Node.js for network operations while keeping the application efficient and user-friendly.

 */
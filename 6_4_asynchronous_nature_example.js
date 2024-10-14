

/* 
2. Asynchronous File Upload Simulation (Event-Driven Programming)
This is an example of how to simulate an asynchronous file upload process using events.

Scenario:
Simulate uploading a file and emitting an event when the file upload completes.

 */


// Import the EventEmitter class from the 'events' module
import EventEmitter from 'events';

// Define the FileUploader class, inheriting from EventEmitter
class FileUploader extends EventEmitter {
    // Method to upload a file
    uploadFile(fileName) {
        console.log(`Starting upload of ${fileName}...`);

        // Simulate async upload with setTimeout
        setTimeout(() => {
            console.log(`${fileName} upload complete!`);
            // Emit the 'fileUploaded' event once the upload is complete
            this.emit('fileUploaded', { fileName, status: 'success' });
        }, 2000); // Simulate a 2-second upload time
    }
}

// Create an instance of the FileUploader class
const uploader = new FileUploader();

// Register event listener for 'fileUploaded'
uploader.on('fileUploaded', (eventData) => {
    console.log(`Event received: ${eventData.fileName} uploaded successfully with status: ${eventData.status}`);
});

// Start file upload
uploader.uploadFile('my_photo.jpg');

// Log a message indicating the upload process has started
console.log('File upload process started...');



// ------------------------------------ eplanation of the above code

/* 
Overview
The code defines a simple file upload simulation using Node.js's EventEmitter class.
 It demonstrates how to manage asynchronous operations and handle events using the EventEmitter pattern.
  This is particularly useful for scenarios where you want to notify other parts of your
   application when certain actions have been completed, such as the completion of an upload process.

Code Breakdown

1. Importing the EventEmitter Class
javascript
Copy code
import EventEmitter from 'events';
This line imports the EventEmitter class from the built-in events module in Node.js. 
The EventEmitter class is used to create objects that can emit events and handle event listeners.

2. Defining the FileUploader Class
javascript
Copy code
class FileUploader extends EventEmitter {
Here, we define a class named FileUploader that extends the EventEmitter class. 
By extending EventEmitter, the FileUploader class can emit events and listen for them, 
allowing us to create a custom event-driven behavior.

3. Upload File Method
javascript
Copy code
uploadFile(fileName) {
    console.log(`Starting upload of ${fileName}...`);
This method simulates the process of uploading a file. 
It takes fileName as a parameter and logs a message indicating that the upload is starting.

Simulating Asynchronous Upload
javascript
Copy code
setTimeout(() => {
    console.log(`${fileName} upload complete!`);
    this.emit('fileUploaded', { fileName, status: 'success' });
}, 2000); // Simulate a 2-second upload time
setTimeout: This function is used to simulate an asynchronous operation, 
mimicking a file upload process. It sets a delay of 2000 milliseconds (2 seconds) before
 executing the callback function.

Inside the Callback:

The message indicating that the upload is complete is logged.
The emit method is called to emit the fileUploaded event, passing an object 
containing the fileName and status as parameters. This notifies any listeners that 
the file upload has completed successfully.

4. Creating an Instance of FileUploader
javascript
Copy code
const uploader = new FileUploader();
An instance of the FileUploader class is created. 
This instance will be used to start the upload process and listen for events.

5. Registering Event Listeners
javascript
Copy code
uploader.on('fileUploaded', (eventData) => {
    console.log(`Event received: ${eventData.fileName} uploaded successfully with status: ${eventData.status}`);
});
The on method of the EventEmitter class is used to register
 an event listener for the fileUploaded event.
When the fileUploaded event is emitted, the provided callback 
function will be executed. It receives eventData, which contains the details of the upload,
 and logs a message indicating that the file has been uploaded successfully.

6. Starting the File Upload
javascript
Copy code
uploader.uploadFile('my_photo.jpg');
This line calls the uploadFile method on the uploader instance, 
initiating the upload process for the file named 'my_photo.jpg'.


7. Logging Upload Process Start
javascript
Copy code
console.log('File upload process started...');
This message is logged immediately after starting the upload process.
 It shows that the upload has been initiated, but it does not wait for the completion 
 of the upload due to the asynchronous nature of the operation.

How It Works Together
Asynchronous Behavior: The uploadFile method starts the upload process,
 and while it's waiting (simulated by setTimeout), the program continues executing 
 the next lines of code. This non-blocking behavior is a fundamental feature of JavaScript and Node.js,
  which helps improve performance and responsiveness in applications.

Event-Driven Architecture: By using the EventEmitter, 
the code creates an event-driven model where different parts of the application
 can communicate with each other through events. Once the file upload is complete,
  any part of the application listening for the fileUploaded event can respond accordingly.

Example Output
When you run the code, you should see output similar to:

arduino
Copy code
Starting upload of my_photo.jpg...
File upload process started...
my_photo.jpg upload complete!
Event received: my_photo.jpg uploaded successfully with status: success
Conclusion
This code serves as a great example of how to use Node.js's EventEmitter class
 to handle asynchronous operations and implement an event-driven architecture.
  It allows you to easily respond to events such as the completion of a file upload,
   making it suitable for various applications where event handling is essential.

 */







/* 
///  ------------------------------------------code

// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Define the FileUploader class, inheriting from EventEmitter
class FileUploader extends EventEmitter {
    // Method to upload a file
    uploadFile(fileName) {
        console.log(`Starting upload of ${fileName}...`);

        // Simulate async upload with setTimeout
        setTimeout(() => {
            console.log(`${fileName} upload complete!`);
            // Emit the 'fileUploaded' event once the upload is complete
            this.emit('fileUploaded', { fileName, status: 'success' });
        }, 2000); // Simulate a 2-second upload time
    }
}

// Create an instance of the FileUploader class
const uploader = new FileUploader();

// Register event listener for 'fileUploaded'
uploader.on('fileUploaded', (eventData) => {
    console.log(`Event received: ${eventData.fileName} uploaded successfully with status: ${eventData.status}`);
});

// Start file upload
uploader.uploadFile('my_photo.jpg');

// Log a message indicating the upload process has started
console.log('File upload process started...');



// =====================================output  ---> we got the error

PS C:\nodejs> node 6_4_asynchronous_nature_example.js 
file:///C:/nodejs/6_4_asynchronous_nature_example.js:12
const EventEmitter = require('events');
                     ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\nodejs\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/nodejs/6_4_asynchronous_nature_example.js:12:22
    at ModuleJob.run (node:internal/modules/esm/module_job:234:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:473:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)

Node.js v20.18.0
PS C:\nodejs> 


//----------------------------- the steps that we used to resolve the above error


The error you're encountering occurs because your Node.js environment
 is configured to treat files as ES modules due to the presence of "type": "module" in your package.json. 
 This means you need to use import statements instead of require.

Here's how you can modify your existing code to work correctly with ES modules:

Updated Code for ES Module
You need to replace the require statement with an import statement, as shown below:

Steps to Run the Code
Ensure Correct File Extension: Make sure your file is saved
 as 6_4_asynchronous_nature_example.js (not .cjs, as you're using ES modules).

Check Package.json: Ensure your package.json contains "type": "module" to enable ES module support:

json
Copy code
{
    "type": "module"
}
Run the Script:

Open your terminal or command prompt.
Navigate to the directory where your script is saved.
Execute the script using:
bash
Copy code


Expected Output
When you run the modified code, you should see output similar to this:

arduino
Copy code
Starting upload of my_photo.jpg...
File upload process started...
(my_photo.jpg upload complete!)
Event received: my_photo.jpg uploaded successfully with status: success
Explanation of Changes
Import Statement: The import EventEmitter from 'events'; 
statement is used instead of const EventEmitter = require('events');.
Compatibility with ES Modules: This change aligns with the ES module syntax
 required by Node.js when the module type is set to "module".
Additional Notes
If you ever want to switch back to using CommonJS (the older module system), you can either:

Change the file extension to .cjs and keep your require statements.
Remove "type": "module" from your package.json, allowing Node.js to treat all .js files as
 CommonJS by default.

 */


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

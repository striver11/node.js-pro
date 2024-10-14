/* 
Scenario:
You want to read data from one file, append it to another file, and log messages when each action is complete, without blocking the rest of the application.

Asynchronous Example Using Callbacks (fs with readFile and appendFile):

 */

const fs = require('fs');

// Read the input file asynchronously
fs.readFile('./Files/input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading filge:', err);
        return;
    }

    console.log('File read successfully:', data);

    // Create content to append
    let content = `\nData read from input.txt: ${data}. \nDate created: ${new Date()}`;

    // Append to the output file asynchronously
    fs.appendFile('./Files/output.txt', content, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return;
        }

        console.log('Content successfully appended to output.txt');
    });
});

console.log('This log happens before file operations complete');



/* 
Explanation:
fs.readFile(): Asynchronously reads the content of input.txt. If there's an error (e.g., file not found),
 it handles it in the callback function.
fs.appendFile(): Once the content is read, it appends the data to output.txt.
 Again, this operation is non-blocking, and we use a callback to handle success or errors.
Non-blocking behavior: The console.log('This log happens before file operations complete') runs before the file operations finish,
 demonstrating that the code doesn’t wait for the I/O operations to complete.
 */
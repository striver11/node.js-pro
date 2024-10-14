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

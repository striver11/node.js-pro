

/* 
3. Asynchronous Database Query
In real-world applications, you'll often interact with a database asynchronously. Here's an example using mysql2 with promises.

Scenario:
Retrieve data from a database asynchronously and process the results.

 */


import mysql from 'mysql2/promise'; // Use import instead of require

async function queryDatabase() {
    try {
        // Create a connection to the database
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',           // Change this if you have a different user
            database: 'test_db',    // Your database name
            password: 'root'     // Your password for the database user
        });

        // Asynchronously query the database
        const [rows] = await connection.execute('SELECT * FROM users');
        
        // Process the query result
        rows.forEach(user => {
            console.log(`User: ${user.name}, Email: ${user.email}`);
        });

        // Close the connection
        await connection.end();
        console.log('Database connection closed');
    } catch (err) {
        console.error('Database error:', err);
    }
}

queryDatabase();

console.log('Database query initiated...');





//=========================================output

/* 
PS C:\nodejs> node 6_7_asynchronouse_nature_example.js
Database query initiated...
User: Alice Johnson, Email: alice.johnson@example.com
User: Bob Smith, Email: bob.smith@example.com
User: Charlie Brown, Email: charlie.brown@example.com
Database connection closed

 */



//-------------------------------------------explanation

/* 
This code snippet demonstrates how to connect to a MySQL database and query data asynchronously
 using the mysql2 library with Promises in Node.js. Let's break it down step by step:

1. Importing the MySQL Library
javascript
Copy code
import mysql from 'mysql2/promise'; // Use import instead of require
This line imports the mysql2 library using ES module syntax. The /promise part of the 
import ensures that you can use Promises for database operations, allowing for cleaner 
and more manageable asynchronous code.


2. Defining the Asynchronous Function
javascript
Copy code
async function queryDatabase() {
Here, we define an asynchronous function called queryDatabase. 
The async keyword allows the use of await within the function, enabling you to write
 asynchronous code that looks synchronous.


3. Trying to Establish a Connection
javascript
Copy code
try {
    // Create a connection to the database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',           // Change this if you have a different user
        database: 'test_db',    // Your database name
        password: 'password'     // Your password for the database user jsjs
    });
This block attempts to create a connection to the MySQL database. 
The await keyword pauses the execution of the code until the connection is successfully established.
 If the connection fails, it will throw an error, which will be caught in the catch block.
The connection object is created with several parameters:
host: The hostname where the MySQL server is running (usually localhost for local development).
user: The username used to connect to the database (in this case, root).
database: The name of the database you want to work with (test_db).
password: The password associated with the MySQL user.


4. Querying the Database
javascript
Copy code
// Asynchronously query the database
const [rows] = await connection.execute('SELECT * FROM users');
This line executes an SQL query to select all records from the users table.
The execute method returns a Promise, which resolves to an array where the first element (rows)
 contains the result set of the query.
Here, we're using array destructuring to directly extract the rows from the result.


5. Processing the Query Results
javascript
Copy code
// Process the query result
rows.forEach(user => {
    console.log(`User: ${user.name}, Email: ${user.email}`);
});
This block iterates over the array of users returned from the query.
For each user, it logs the user's name and email to the console. 
The assumption here is that the users table has name and email columns.


6. Closing the Database Connection
javascript
Copy code
// Close the connection
await connection.end();
console.log('Database connection closed');
After processing the query results, this line closes the database connection 
using the end method. It's crucial to close the connection to free up resources.
Again, await is used to ensure that the connection is closed before moving on to the next line of code.


7. Error Handling
javascript
Copy code
} catch (err) {
    console.error('Database error:', err);
}
If any error occurs during the connection establishment or the query execution,
 the code inside the catch block will run. It logs the error message to the console.


8. Executing the Function
javascript
Copy code
queryDatabase();
This line calls the queryDatabase function, initiating the whole process of 
connecting to the database and querying data.


9. Logging Initiation
javascript
Copy code
console.log('Database query initiated...');
This line logs a message to the console indicating that the database query has been initiated. 
It runs immediately after the function call,
 demonstrating the asynchronous nature of JavaScript, as this log will appear before the results of
  the query unless the connection takes longer than expected.

Summary
In summary, this code snippet illustrates how to use asynchronous programming in Node.js to
 connect to a MySQL database, execute a query, process the results, and handle any errors gracefully.
  The use of Promises and async/await syntax helps manage asynchronous operations in a more readable
   manner compared to traditional callback methods.

 */



// ************************************how to make it work


/* 
To make the provided Node.js program work with a MySQL database, follow these steps:

Install the required package: Make sure you have the mysql2 package installed. If you haven't installed it yet, run:

bash
Copy code
npm install mysql2
Set up your MySQL database:

Ensure you have a MySQL server running.
Create a database named test_db.
Create a table named users with appropriate columns.
Insert sample data: Use the following SQL commands to create the table and insert sample data into it.

SQL Setup
Here’s the SQL code to create the users table and insert some sample data:

sql
Copy code
-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS test_db;

-- Use the created database
USE test_db;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Insert sample data into the users table
INSERT INTO users (name, email) VALUES 
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Smith', 'bob.smith@example.com'),
('Charlie Brown', 'charlie.brown@example.com');
Explanation of the SQL Code
CREATE DATABASE: This command creates a new database named test_db if it does not already exist.
USE test_db: This sets the current database context to test_db.
CREATE TABLE: This command creates a new table named users with three columns:
id: An integer that auto-increments with each new user (primary key).
name: A string (up to 100 characters) that stores the user's name.
email: A string (up to 100 characters) that stores the user's email address.
INSERT INTO: This command adds three sample users to the users table.
Complete Program
Make sure your Node.js code is structured as follows:

javascript
Copy code
const mysql = require('mysql2/promise');

async function queryDatabase() {
    try {
        // Create a connection to the database
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',           // Change this if you have a different user
            database: 'test_db',    // Your database name
            password: 'password'     // Your password for the database user
        });

        // Asynchronously query the database
        const [rows] = await connection.execute('SELECT * FROM users');
        
        // Process the query result
        rows.forEach(user => {
            console.log(`User: ${user.name}, Email: ${user.email}`);
        });

        // Close the connection
        await connection.end();
        console.log('Database connection closed');
    } catch (err) {
        console.error('Database error:', err);
    }
}

queryDatabase();

console.log('Database query initiated...');
Running the Program
Make sure your MySQL server is running and accessible.
Execute the SQL commands in your MySQL client (like MySQL Workbench, phpMyAdmin, or the MySQL command line) to set up the database and insert the data.
Run your Node.js program with:
bash
Copy code
node your_program_file.js
If everything is set up correctly, you should see the output listing the users and their emails as follows:

sql
Copy code
Database query initiated...
User: Alice Johnson, Email: alice.johnson@example.com
User: Bob Smith, Email: bob.smith@example.com
User: Charlie Brown, Email: charlie.brown@example.com
Database connection closed
Troubleshooting
Connection Issues: If you encounter connection issues, ensure that your MySQL server is running and that the credentials (username, password, database name) are correct.
Permissions: Ensure that the user you are connecting with has the necessary permissions to access the database and read from the users table.
Error Handling: The catch block will log any database errors that occur during execution, so check that output if you run into problems. 
*/



/* 
5. Asynchronous Task Scheduling with Timers
In some situations, you may need to schedule tasks to run after a delay or at regular 
intervals without blocking other tasks.

Scenario:
You want to simulate an asynchronous task that runs at a specific time or periodically.

 */


// Simulate a delayed task
setTimeout(() => {
    console.log('Task executed after a delay of 3 seconds');
}, 3000); // 3 second delay

// Simulate a periodic task (runs every 2 seconds)
const intervalId = setInterval(() => {
    console.log('This task runs every 2 seconds');

    // Stop the interval after 6 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Stopped the periodic task');
    }, 6000); // Stop after 6 seconds
}, 2000);

console.log('Task scheduling initiated...');




//------------------------------output
/* 
PS C:\nodejs> node 6_5_asynchronous_nature_example.js
Task scheduling initiated...
This task runs every 2 seconds
Task executed after a delay of 3 seconds
This task runs every 2 seconds
This task runs every 2 seconds
Stopped the periodic task
Stopped the periodic task
Stopped the periodic task

*/



//-----------------------explanation

/* 
Overview
This code snippet simulates two types of asynchronous tasks using setTimeout and setInterval:

A single delayed task that runs after a specified delay.
A periodic task that runs at regular intervals until it is stopped.
Code Breakdown
1. Simulate a Delayed Task
javascript
Copy code
setTimeout(() => {
    console.log('Task executed after a delay of 3 seconds');
}, 3000); // 3 second delay

setTimeout: This function schedules a task to be executed after a specified delay.
Callback Function: The first argument is a callback function that will be executed after the delay.
 In this case, it logs a message to the console.
Delay Parameter: The second argument, 3000, specifies the delay in milliseconds (3 seconds). 
After 3 seconds, the message "Task executed after a delay of 3 seconds" will be printed to the console.
How it Works
When the setTimeout function is called, it doesn't block the execution of subsequent code.
 Instead, it sets a timer and continues executing the next lines of code immediately.

2. Simulate a Periodic Task
javascript
Copy code
const intervalId = setInterval(() => {
    console.log('This task runs every 2 seconds');

    // Stop the interval after 6 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Stopped the periodic task');
    }, 6000); // Stop after 6 seconds
}, 2000);
setInterval: This function is used to execute a task repeatedly at specified intervals.
Callback Function: The first argument is a callback function that runs every 2 seconds 
(specified by the second argument).
Interval Parameter: The second argument, 2000, indicates the interval in milliseconds (2 seconds).
 This means that the message "This task runs every 2 seconds" will be printed every 2 seconds.

Stopping the Periodic Task
Inside the setInterval callback, there is another setTimeout function:
javascript
Copy code
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped the periodic task');
}, 6000); // Stop after 6 seconds
This nested setTimeout is set to execute after 6 seconds.
It calls clearInterval(intervalId) to stop the periodic task.
It logs the message "Stopped the periodic task" to indicate that the periodic task has been terminated.

How it Works
Similar to setTimeout, the setInterval function sets up a timer to execute its callback repeatedly. 
It continues to run until clearInterval is called.
The first invocation of the periodic task occurs 2 seconds after the setInterval is established, 
and then it continues every 2 seconds thereafter.

3. Initial Message
javascript
Copy code
console.log('Task scheduling initiated...');
This line is executed immediately after the timers are set up. It logs the message 
"Task scheduling initiated..." to the console to indicate that the scheduling of tasks has begun.
Expected Output
When you run this code, the following output will occur:

sql
Copy code
Task scheduling initiated...
This task runs every 2 seconds
(This task runs every 2 seconds is printed again every 2 seconds until it stops)
Stopped the periodic task
After approximately 6 seconds, the output will look like this:

arduino
Copy code
Task scheduling initiated...
This task runs every 2 seconds
This task runs every 2 seconds
This task runs every 2 seconds
Stopped the periodic task
Task executed after a delay of 3 seconds
Detailed Flow of Execution
Immediate Execution:

The first line logs "Task scheduling initiated..." immediately.
Delayed Task:

After 3 seconds, the delayed task executes and logs "Task executed after a delay of 3 seconds".
Periodic Task:

The periodic task starts executing every 2 seconds, logging "This task runs every 2 seconds".
After 6 seconds from the time the setInterval was called, the setTimeout inside the 
setInterval callback executes:
It clears the interval, stopping further execution of the periodic task.
Logs "Stopped the periodic task" to indicate that the periodic task has been halted.
Conclusion
This code demonstrates how to schedule asynchronous tasks using JavaScript's 
timer functions (setTimeout and setInterval). The non-blocking nature of these 
functions allows other code to continue executing while waiting for the timers to complete.
 This is particularly useful in scenarios such as user interfaces, where you might want to perform 
 tasks without freezing the application.

 */
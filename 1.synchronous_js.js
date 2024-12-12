//! What is synchronous Javascript?

/*
Synchronous Javascript is one in which the code is executed line by line and their tasks are completed instantly, i.e. there is no time-delay in the completion of the tasks for those lines of code. ⏲️
*/

//! Synchronous JS Example:

const funtionOne = () => {
  console.log("Funtion One 1️⃣");
  funtionTwo();
  console.log("Funtion One, Part Two 1️⃣.2️⃣");
};

const funtionTwo = () => {
  console.log("Funtion Two 2️⃣");
};

//funtionOne();

//1. "Funtion One 1️⃣"
//2. "Funtion Two 2️⃣"
//3. "Funtion One, Part Two 1️⃣.2️⃣"

//! Now, let's change the same code to Asynchronous code: ⌛
const asyncFuntionOne = () => {
  console.log("Funtion One 1️⃣");
  asyncFuntionTwo();
  console.log("Funtion One, Part Two 1️⃣.2️⃣");
};

const asyncFuntionTwo = () => {
  setTimeout(() => {
    console.log("Funtion Two 2️⃣");
  }, 2000); // waiting... ⏰
};

asyncFuntionOne();

//1. "Funtion One 1️⃣"
//2. "Funtion One, Part Two 1️⃣.2️⃣"
//3. "Funtion Two 2️⃣"

//! What is Asynchronous Javascript?

/*
Async. Js. is one in which some lines of code take time to run. These tasks are run in the background while the JS Engine keeps executing other lines of code. When the result of the async. tasks are available, they are then used in the program. ⏳👨🏻‍💻
*/

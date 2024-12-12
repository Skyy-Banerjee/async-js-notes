![eventLoop](https://github.com/user-attachments/assets/7386045b-3ad6-44cb-82c5-e6c23d46014e)

The **Event Loop** is a fundamental concept in JavaScript that enables non-blocking, asynchronous programming. It ensures that operations like I/O, timers, or API calls don't block the execution of other parts of your code. This is especially critical because JavaScript is **single-threaded**, meaning it has a single call stack and executes one piece of code at a time.

---

## **Key Components of the Event Loop**

To understand the Event Loop, it's essential to know about the following components:

1. **Call Stack**  
   - A data structure that keeps track of function calls in the order they are invoked.  
   - It works in a **LIFO** (Last In, First Out) manner.
   - Only one function can execute at a time in the call stack.

2. **Web APIs / Browser APIs**  
   - These are features provided by the browser, such as `setTimeout`, `DOM events`, `fetch`, or `XHR requests`.  
   - JavaScript itself does not handle these, but it delegates them to the browser.

3. **Callback Queue (Task Queue)**  
   - A queue that holds callbacks or tasks that are ready to be executed.  
   - Tasks in the queue are processed **in order** (FIFO: First In, First Out).

4. **Microtask Queue**  
   - A higher-priority queue for microtasks like **`Promise` callbacks** or **MutationObserver** callbacks.  
   - Microtasks are executed immediately after the current operation and before the Callback Queue.

5. **Event Loop**  
   - The mechanism that constantly checks the **Call Stack** and **Queues**.  
   - It pushes tasks from the **Microtask Queue** or the **Callback Queue** to the Call Stack when it is empty.

---

## **How the Event Loop Works** (Step-by-Step)

1. **Execution Starts**:  
   JavaScript starts executing the code line by line in the **Call Stack**.

2. **Handling Asynchronous Tasks**:  
   When an asynchronous function like `setTimeout`, `fetch`, or `Promise` is called:
   - It is **delegated** to the Web APIs (handled by the browser).
   - The callback or result is scheduled to be executed in the future.

3. **Call Stack Empty Check**:  
   - The Event Loop checks whether the Call Stack is empty.
   - If it is empty, the Event Loop looks into the **Microtask Queue** first.  
   - If the Microtask Queue is also empty, it looks into the **Callback Queue**.

4. **Prioritizing Microtasks**:  
   - Microtasks (e.g., `Promise.then`) are executed **before** tasks in the Callback Queue.

5. **Callback Queue Execution**:  
   - Tasks from the Callback Queue are moved to the Call Stack and executed one by one.

6. **Repeat**:  
   This process continues indefinitely. The Event Loop constantly checks the Call Stack and queues, ensuring smooth execution of tasks.

---

## **Visualizing the Event Loop**

### Example Code:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Callback");
});

console.log("End");
```

### Execution Flow:
1. `"Start"` is logged to the console. (Synchronous code → Call Stack)
2. `setTimeout` is called:
   - The timer is delegated to the **Web APIs** (handled outside JavaScript).
   - The callback is scheduled for execution in the **Callback Queue**.
3. `Promise.resolve().then()` is called:
   - The callback is placed in the **Microtask Queue** (higher priority).
4. `"End"` is logged to the console. (Synchronous code → Call Stack)
5. **Event Loop Checks**:
   - The Call Stack is empty.
   - Microtask Queue (Promise) is processed first: `"Promise Callback"` is logged.
6. Finally, the Callback Queue processes the `setTimeout` callback: `"Timeout Callback"` is logged.

### Output:
```
Start
End
Promise Callback
Timeout Callback
```

---

## **Microtask Queue vs. Callback Queue**

- **Microtask Queue** has higher priority. Tasks like:
   - `Promise.then`
   - `MutationObserver`
- **Callback Queue** handles tasks like:
   - `setTimeout`
   - `setInterval`
   - DOM events (e.g., `click`)

**Order of Execution**:
1. **Call Stack** executes synchronous code.
2. **Microtask Queue** (priority tasks like Promises).
3. **Callback Queue** (tasks like `setTimeout`).

---

## **Why Is the Event Loop Important?**

- **Non-Blocking I/O**: JavaScript can perform tasks like fetching data from a server without stopping other operations.
- **Asynchronous Programming**: Allows tasks to be handled in the background while the rest of the program continues.
- **Performance Optimization**: Efficiently handles large numbers of tasks without freezing the browser.

---

## **Summary**

- The **Event Loop** ensures the Call Stack is never idle when there are tasks to process.
- It gives priority to **Microtasks** (like Promises) before moving on to the **Callback Queue**.
- JavaScript’s single-threaded nature, combined with the Event Loop, enables asynchronous behavior without blocking the main thread.

By understanding the Event Loop, we can better debug asynchronous behavior, avoid pitfalls, and write more optimized and predictable code! 🚀

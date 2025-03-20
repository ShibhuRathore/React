setlength,setpassword,setchangenumber,setcharchanged are created 1 time and their reference are stored and never changed after that
but password,length, changenumber,charchange always keep changing


Closure in JavaScript
A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished execution.

In simple terms, when a function is returned from another function, it still retains access to the variables of the function that created it.


Closures and useCallback in React
Closures and the useCallback hook in React are closely related because useCallback memoizes a function while keeping access to the variables in its lexical scope (closure). Let's break it down step by step.

1. Understanding Closure in JavaScript
A closure is when a function remembers the variables from its outer scope even after the outer function has executed.

Example of Closure:
javascript
Copy
Edit
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureFunc = outerFunction("Hello");
closureFunc("World"); // Still remembers outerVariable = "Hello"
innerFunction remembers outerVariable, even though outerFunction has already executed.
This is a closure.
2. What is useCallback?
In React, useCallback is a hook that memoizes a function to optimize performance.
It prevents unnecessary re-creations of the function on re-renders.

Syntax:
javascript
Copy
Edit
const memoizedFunction = useCallback(callback, [dependencies]);
useCallback returns a memoized version of the function.
It only re-creates the function when the dependencies change.
3. How useCallback Uses Closures?
useCallback uses closures because it remembers the function’s scope even after a re-render.

Example: Without useCallback (Unnecessary Re-Creation of Function)
javascript
Copy
Edit
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        console.log("Incrementing:", count);
        setCount(count + 1);
    };

    console.log("Component Re-rendered!");
    return <button onClick={increment}>Increment</button>;
}
Every time the component re-renders, increment function is recreated, even if it's the same logic.
4. Optimized Version Using useCallback
javascript
Copy
Edit
import { useState, useCallback } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Incrementing:", count);
        setCount(prevCount => prevCount + 1);
    }, []); // Empty dependency array means `increment` is memoized

    console.log("Component Re-rendered!");
    return <button onClick={increment}>Increment</button>;
}
🔹 How is Closure Used?

useCallback remembers the increment function even after re-renders.
The function still has access to count because of closure.
5. When to Use useCallback?
✅ Use it when passing functions as props (prevents child re-renders).
✅ Use it in dependency arrays (ensures stable functions).
✅ Use it when functions are inside useEffect or event handlers.

6. Closure vs. useCallback – Key Differences
Feature	Closure	useCallback
Definition	Function remembers variables from its outer scope	React hook that memoizes a function
Purpose	Retain state even after execution	Optimize performance & avoid unnecessary function re-creation
When Used?	Any JavaScript function can create closures	Used in React components to prevent re-renders

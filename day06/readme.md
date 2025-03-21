Understanding the useEffect Hook in React
In this lecture, we explored the useEffect hook and how it efficiently manages side effects in functional components. Unlike useState, which always triggers an additional re-render even if the state remains unchanged, useEffect only executes when its dependencies change.

How useEffect Works
The useEffect hook follows a simple yet powerful mechanism:

Runs after the initial render by default.
Executes only when its dependencies change, avoiding unnecessary re-execution.
Does NOT always trigger when the parent component re-renders—it runs only if its specified dependencies have changed.
Why useEffect is Efficient?
One of the primary reasons useEffect is useful is that it saves computational power by preventing unnecessary DOM manipulations, which are expensive operations. Since React's rendering mechanism is optimized, using useEffect correctly can enhance performance significantly.

Key Takeaways:
✅ Prevents redundant computations unless dependencies change.
✅ Avoids unnecessary DOM manipulations, which require high computational power.
✅ Works well with asynchronous operations such as fetching data, subscribing to events, or setting up timers.
Optimizing with React.memo
To further optimize performance, React.memo can be used to prevent unnecessary re-renders of functional components. A component wrapped in React.memo only re-renders when its props change.
Benefits of React.memo
✔ Prevents unnecessary renders, improving performance.
✔ Optimized for components with stable props.
✔ Works well with useEffect to avoid excessive computations.

Conclusion
useEffect is a powerful hook that only executes when its dependencies change, preventing unnecessary computations.
DOM manipulations are expensive, and useEffect ensures they happen only when necessary.
When a component’s prop changes, useEffect triggers, making it useful for handling updates dynamically.
React.memo further optimizes rendering by preventing unnecessary updates in functional components.
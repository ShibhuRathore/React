Understanding useState in React
The useState hook allows functional components to manage state in React.

How useState Works
jsx
Copy
Edit
const [count, setCount] = useState(0);
count: Holds the current state value.
setCount: Updates the state and triggers a re-render.
useState(0): Initializes count with 0.
When setCount(3) is called:

useState(3) becomes the new state.
React re-renders the component.
count now holds 3 everywhere in the UI.
Rules for useState
❌ Cannot be used inside if-else, loops, or functions.
✅ Must be at the top level of the component.

Primitive vs. Reference Types
Numbers & Booleans: Stored by value in the stack.
Strings, Arrays & Objects: Stored by reference in the stack, with actual data in the heap.
For arrays/objects, update state by changing the reference:

jsx
Copy
Edit
setArr([...arr, newValue]);  // ✅ Correct way  
setUser({ ...user, age: 26 });  // ✅ Correct way  
Direct mutation (arr.push(4), user.age = 26) won’t trigger re-renders.

Key Takeaways
Declare useState at the top level.
Update arrays/objects using a new reference.
Avoid direct mutations to ensure re-renders.
What is Prop Drilling in JavaScript?
Prop Drilling is a term used in React.js when you pass data (props) from a parent component to a deeply nested child component, even though intermediate components do not need that data. These intermediate components simply act as a bridge to pass the props down.

Disadvantage-> if the passed  arguments(props) gets changed all the parent functions will be rerendered

we have to pass arguments inside the child function as the props and then in the child function we have to destructure it 

STATE LIFTING -> What is State Lifting in React?
State Lifting is a pattern in React where you move the state from a child component to a common parent component so that multiple child components can access and modify it.

Why Lift State?
When two or more child components need to share the same state, keeping it in one child would make data synchronization difficult.

Instead, moving the state up to the closest common ancestor allows easier communication and updates.


useContext hook-----------> createContext 
            |
            |--------------> useContext


        <globalContext.provider value={{count,setcount}}><globalContext.provider/>
        when using globalContext.provider value given by createContext will be flushed
         when you use <globalContext.Provider> and provide a new value, the default value from createContext will be overwritten (flushed).
         we can cnsume the data provided by globalContext.provider using useContext


How createContext and useContext Work
When you create a context using createContext, you define a default value (optional). But if you wrap your app with <globalContext.Provider> and pass a new value, that value will replace the default.
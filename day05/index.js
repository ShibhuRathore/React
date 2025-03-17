import React,{useState} from "react"
import ReactDOM from'react-dom/client'

function Counter(){
    let[count,setCount]=useState(0);
    function incrementnumber(){
        setCount(count+1);
        
    }
    function decrementnumber(){
        setCount(count-1);
    }
    return(
        <div className="first">
            <h1>Count is :{count}</h1>
            <button onClick={incrementnumber}>Increment{count}</button>
            <button onClick={decrementnumber}>Decrement{count}</button>

        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)

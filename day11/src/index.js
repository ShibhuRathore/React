import React,{useState,useMemo,useCallback,useEffect} from "react";
import ReactDOM from "react-dom/client"


function application(){
const [count,setCount]=useState(0);
return(
    <>
    <h1>Hello Coder Army</h1>
    <Increment counts={count} setCounts={setCount}/>
    <Decrement counts={count} setCounts={setCount}/>
    </>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
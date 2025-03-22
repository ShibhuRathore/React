import React,{useState,useRef,useMemo,useCallback,useEffect} from "react";
import ReactDOM from "react-dom/client"


// function App(){

//     const money=useRef(0);
//     const [count,setCount]=useState(0);
//     return (<>
//         <h1>Counter is :{count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         <h1>Money is:{money.current}</h1>
//         <button onClick={()=>{money.current=money.current+1
//             console.log(money.current);
//         }}>Increment</button>
//         </>
//     )
    
    
// }

function App(){
    // const [result,setResult]=useState(null);
    const [count,setCount]=useState(0);
const [number,setNumber]=useState("");
    const Fibbonaci=useCallback((n)=>{
        if(n<=1)
            return n;
        return Fibbonaci(n-1)+Fibbonaci(n-2);
    })
    const result=useMemo(()=>Fibbonaci(number),[number])
    return ( <>
    <h1>Counter is:{count} </h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <div>
        <h2>Fibbonaci number is : {result}</h2>
        <input type="number " value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    </div>
    </> )
}

function StopWatch(){
    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const intervalRef=useRef(null);
    function start(){
        if(!isRunning){
            intervalRef.current=setInterval(()=>{
                setTime(prevTime=>prevTime+1);
            },1000)
            setIsRunning(true);
        }
    }
   function stop(){
    if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setIsRunning(false);
    }
   }
   function reset(){
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setTime(0);
   }

   return(
    <><h1> StopWatch is :{time}</h1>
    <button onClick={start}>Start</button>
    <br></br>
    <br></br>
    <button onClick={stop}>Stop</button>
    <br></br>
    <br></br>
    <button onClick={reset}>Reset</button>    </>
   )
}
// ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)
ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch></StopWatch>)

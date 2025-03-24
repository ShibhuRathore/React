import React ,{useState,useMemo,useCallback,useEffect } from"react";
import ReactDOM from "react-dom/client";
import Second from "./second";
import GlobalContext from "./global";
import Fifth from "./fifth";


function App(){
    const [count,setCount]=useState(10);
    console.log(GlobalContext);
    return(
        <>
        <Fifth></Fifth>
        <GlobalContext.Provider value={{count,setCount}}>
            <h1>HELLO CODER ARMY {count}</h1>
            <Second/>
        </GlobalContext.Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
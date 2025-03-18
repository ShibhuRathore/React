import React from "react";
import ReactDOM from "react-dom/client"

const props={
    name:"Rohit negi",
    age:"23"
}
function Greet(props){
    console.log(props);
    return <h2>Hello Bhaiya ji {props.name} {props.age}</h2>;
}
const element2=<Greet name="Rohit negi" age="23"/>
const element1=<h1>Hello Coder Army</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element1);
root.render(element2)

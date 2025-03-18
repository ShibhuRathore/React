import React from "react";
import ReactDOM from "react-dom/client"

// const element=React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px"}},"Hello COder Army");
// const element2=React.createElement("h1",{id:"second",className:"mohit",style:{backgroundColor:"pink",fontSize:"30px"}},"Hello ");
// const div1=React.createElement('div',{},[element,element2]);
// ReactRoot.render(div1);
// ReactRoot.render(element2);



// jsx ke andar aap js ke expression ko dal sakte ho 
const obj={
    name:"Rohit",
    age:"23"
}
const obj2={
    backgroundColor:'black',
    color:'pink'
}
const name="ROHIT"

// React ka element
const newElement=(<div>
<h1 style={obj2} >Hello Coder Army {name}</h1>
<h2 money={23}>mazza aagaya  {obj.age}</h2>
</div>

)

// React component
//function based componennt
function greet(){
    return 
    (<h1>Aur Bhia Kaisa Hai</h1>)
}

const newElement2=greet();
  
const meet=()=>{
    return <h2>Mera sab achaa hai</h2>
}
const newElement3=meet();

const  ReactRoot=ReactDOM.createRoot(document.getElementById('root'))
ReactRoot.render(meet());

// mutliple function call
ReactRoot.render(<>{greet()}{meet()}</>)
// ReactRoot.render(newElement2);
// ReactRoot.render(newElement3);


//^carat minor and patch changes are eligible 
// ~tilda patches are eligible
// bundler-parcel,vite
// bable
// parcel
// cdn
// npm
// version 1.0.0-> major minor patch

// npx parcel index.htm
// npx parcel build index.htm
// JSX: Javascript XML:HTML code direct js ke andar likh sakte ho 
// bable




const element=React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px"}},"Hello COder Army");
const element2=React.createElement("h1",{id:"second",className:"mohit",style:{backgroundColor:"pink",fontSize:"30px"}},"Hello ");
const div1=React.createElement('div',{},[element,element2]);
const  ReactRoot=ReactDOM.createRoot(document.getElementById('root'))
// ReactRoot.render(element);
// ReactRoot.render(element2);
ReactRoot.render(div1);




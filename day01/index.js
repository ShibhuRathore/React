const React={
    createElement:function(tag,style,child){
        const element=document.createElement(tag);
        if(typeof(child)==='object'){
            for(let key of child){
                element.append(key);
            }
        }
        else{
            element.append(child);
        }
        element.innerText=child;

        for (let key in style){
            element.style[key]=style[key];
        }
        return element;
    }
}

const header1=React.createElement('h1',{fontstyle:"25px",backgroundColor:"black",color:"white"},"Hello Coder Army")
const header2=React.createElement('h2',{fontstyle:"20px",backgroundColor:"blue",color:"white"}," maa ki chut")
const ReactDOM={
    render:function(element,root){
        root.append(element);
    }
}
const li1=React.createElement('li','','HTML')
const li2=React.createElement('li','','CSS')
const li3=React.createElement('li','','JAVASCRIPT')
const ul=React.createElement('ul','{fontstyle:"20px",backgroundColor:"blue",color:"white"}',[li1,li2,li3])

// const header1=document.createElement('h1');
// header1.innerText="Hello Coder army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white"
// const root=document.getElementById("root");
// root.append(header1);
// const root=document.getElementById('root');
// root.append(header1);
// root.append(header2);
ReactDOM.render(header1,document.getElementById('root'))
ReactDOM.render(header2,document.getElementById('root'))
ReactDOM.render(ul,document.getElementById('root'))

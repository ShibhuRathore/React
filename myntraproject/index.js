import React from "react"
import ReactDOM from "react-dom/client"
import Card from"./component/card"
import Footer from "./component/footer"
import Header from "./component/header"
import arr from "./utils/dummy"


//header
//body
//footer



function App(){
    return(
       //header
       //body
       <>
       <Header/>
       <div className="middle" style={{display:"flex", gap:"10px",flexWrap:"wrap"}}>
          {/* <Card cloth="Jeans" offer="30-80%off"/>
        <Card cloth="pant" offer="50-60%off"/>
        <Card cloth="Kurta" offer="30-80%off"/>
        <Card cloth="Pajama" offer="10-80%off" />
        <Card cloth="T-shirt" offer="20-80%off"/>
        <Card cloth="T-shirt" offer="20-80%off"/>
        <Card cloth="T-shirt" offer="20-80%off"/>  */}
        {
            arr.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.Offer}/>)
        }
       </div>
       <Footer/>
       </>
       //footer 
    )
}

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)
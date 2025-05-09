 React
import ReactDOM from "react-dom/client"
import React from "react";

const Title=()=>{
  return(
    <div className="title">
      <h1>title</h1>
    </div>
  )
}
const AppLayout=()=>(
  <div>
   <Title/>
    <h1>hello</h1>
    {Title()}
    <Title></Title>
  </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)



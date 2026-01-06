// used named export here {inise the curly brackets} so much easy to craete 
import { createRoot} from "react-dom/client"
import MainComponent from "./MainComponent"

import "./App.css"
import Header from "./Header.jsx"


const root =createRoot(document.getElementById("root"))
//creating of the multiple components 

function Component(){
  return (
    <h1>This is the First react Project</h1>
  )
}
function ListComponent(){
  return (
    <ul>
     <li>The react project is done with giving the image </li>
     <li>The react project uses importing of the images in the assest folder </li>
     <li> I  have tried thsi react project </li>
  </ul>
  )
}
//otehr all component calling inside the one main componet 
function PageComponent(){
  return (
    <>
  <Header/>
  <Component/>
  <ListComponent/>
  
  </>
  )
}
//main component only calling 
root.render(
  <>
    <PageComponent/>
  </>
)


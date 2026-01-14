import React from 'react'
import Toggle from "./Toggle.jsx"
import ModeChange from './ModeChange.jsx'
export default function App() {
// const [count,setCount ]=React.useState(0) 

// function increase(){
//   setCount(count+1)
//   console.log( "clicked this many times  "+ count)
// }
const [count,setcount]= React.useState(0)
function clicked_yes(){
  setcount(prev => prev+1)
} 
function clicked_no(){
  console.log("The user clicked No")
    
}
  return (
    <>
    <h1> Have you learned new words </h1>
    <button onClick={clicked_yes}> YES </button>
    <button onClick={clicked_no}> NO </button>
    <div> How many words you learned so far ;{count}</div>
    <Toggle />
    <ModeChange />
   </> 
  )
}

 

// have the cursor after the user enters the texts use this useRef use teh below lines 
// import { useRef } from "react"
// curser.current.focus();
//    curser.current.focus();
// use ref={curser} in the input field also 
import Counter from "./Footer.jsx"
export default function Fields(){

const words =["Beautiful","positive","small-lettered"];
// currly brackets put then all time put the return function 
const listedwords= words.map((word)=>{
     return <li key ={word} >{word}</li>
})

// const curser= useRef(null)

//use of preventDefault without for the form to be getting to be refrehed 
function submit(event) {
    event.preventDefault()
    console.log("prompt submitted")

    const formData = new FormData(event.currentTarget)
    const newData = formData.get("prompt")
    words.push(newData)

    console.log(words)
}


    return (
        <main>
            <form onSubmit = {submit} className="form-style">
                <input type="text"
                // ref={curser}
                placeholder ="e.g Plonky"
                aria-label="Give me Words"
                name="prompt"></input>
                {/* Button ontype = button is needed to be put here  */}
                <button  type="submit" >Search Words</button>
                <ol>
                    {listedwords}
                </ol>
            </form>
            <footer className="footer-counter">
            <Counter/>
            </footer>
        </main>
    )
}
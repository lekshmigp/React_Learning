// have the cursor after the user enters the texts use this useRef use teh below lines 
// import { useRef } from "react"
// curser.current.focus();
//    curser.current.focus();
// use ref={curser} in the input field also 
import Counter from "./Footer.jsx"
import WordLibrary from "./WordLibrary.jsx"
import React from "react"

export default function Fields(){
// using the state hook 
const [words,setWords]= React.useState([])
const [filterWord,setFilterWord]= React.useState("")
    

 
function submit(event) {
    event.preventDefault()
    console.log("prompt submitted")

    const formData = new FormData(event.currentTarget)
    const newWord = formData.get("prompt")
    setWords(prevWords => [... prevWords,newWord])
    event.currentTarget.reset()
}

const listedwords= words.map( word=>(
     <li key ={word} >{word}</li>)
    )

    return (
        <main>
            <form onSubmit = {submit} className="form-style">
                <input type="text"
                // ref={curser}
                placeholder ="e.g Plonky"
                aria-label="Give me Words"
                name="prompt"
                onChange={(e) => setFilterWord(e.target.value)}
                ></input>
                {/* Button ontype = button is needed to be put here  */}
                <button  type="submit" >Search Words</button>
                <ol>
                    {listedwords}
                </ol>
            </form>
            <WordLibrary words={words} filterWord={filterWord} />
            <footer className="footer-counter">
            <Counter/>
            </footer>
        </main>
    )
}
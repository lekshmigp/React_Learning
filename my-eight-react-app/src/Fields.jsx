
import Counter from "./Footer.jsx"
// import WordLibrary from "./WordLibrary.jsx"
import React from "react"

export default function Fields(){
const [words,setWords]= React.useState([])
const [filterWord,setFilterWord]= React.useState("")
    

 
function submit(formData) {
    const newWord = formData.get("prompt")
    setWords(prevWords => [... prevWords,newWord])
}

const listedwords= words.map( word=>(
     <li key ={word} >{word}</li>)
    )

    return (
        <main>
            <form action = {submit} className="form-style">
                <input type="text"
                // ref={curser}
                placeholder ="e.g Plonky"
                aria-label="Give me Words"
                name="prompt"
                // onChange={(e) => setFilterWord(e.target.value)}
                ></input>
                {/* Button ontype = button is needed to be put here  */}
                <button  type="submit" >Search Words</button>
                {words.length >0 ? <section className ="section-down">
                    <h2>Words on the hand :</h2>
                <ul>
                    {listedwords}
                </ul>
                { words.length >2 && <div className="get_word">
                    <h3>Ready for the new word :</h3>
                    <p>Generate the word based on the user prompt </p>
                </div>}
                </section> : null }
            </form>
            {/* <WordLibrary words={words} filterWord={filterWord} /> */}
            <footer className="footer-counter">
            <Counter/>
            </footer>
        </main>
    )
}
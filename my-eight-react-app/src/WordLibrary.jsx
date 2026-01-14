
import React from "react"
export default function WordLibrary({words,filterWord}){
      const filteredWords= words.filter((word)=>{
       return  word.toLowerCase().includes(filterWord.toLowerCase())
    })
    
    return (
        <ol>
           {filteredWords.map( word => (
            <li key ={word}> {word}</li>
           ))}
        </ol>
    )
}
import React from "react"

export default function Joke(props){
    const [issubmit,setIsSubmit]=React.useState(false)


    function submitToggle(){
        debugger
        setIsSubmit(prev => !prev)
        console.log(issubmit)
    }
    return (
        <>
        <p> number :{props.id}</p>
        {/* dont use ternary ..use ? and : more often to reduce the potential errors  */}
        {props.setup ? <p> The setup line is : {props.setup} </p> : null}
        { issubmit === true && <p> The joke no 2:{props.punchline}</p>}
        {/* onClick only works in the form  */}
        <button onClick={submitToggle}> {issubmit  ? "hide ":"show "}Punchline  </button>
        
        <hr />
        </>
    )
}
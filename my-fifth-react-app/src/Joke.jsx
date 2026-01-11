function Joke(props){
    console.log(props)
    return(
        <>
        <header>
            <h2> punchline:</h2>
        </header>
        {props.setup && <p>The joke no Setup is :{props.setup} </p> }
        <p> The joke no 2:{props.punchline}</p>
        <hr />
        </>
    )
}export default Joke
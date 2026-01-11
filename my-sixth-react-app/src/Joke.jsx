export default function Joke(props){
    return (
        <>
        {props.setup && <p> The setup line is : {props.setup} </p> }
        <p> The joke no 2:{props.punchline}</p>
        <hr />
        </>
    )
}
// noo need of the import line of the App.jsx
// noo need of the image to be imported here also 
export default function Entry (props){
    return (
        
        <article className="entry">
            <div className="main-container">
                <img  className="main-image" width = "70px" src= {props.image} alt={props.place}/>
            </div>

            <div>
                <span> {props.place}</span>
                <a href={props.mapLink}>Visit to {props.place} </a>
                <p> Month i visited this place: {props.month}</p>
                <p>{props.description}</p>
            </div>

        </article>
        
        
    )
}
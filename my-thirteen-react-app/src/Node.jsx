
import React from "react"

export default function Node(props) {
    // REMOVE THIS: const [on, setOn] = React.useState(props.on)
    
    // The button now looks directly at props.on
    return (
        <button 
            style={{ backgroundColor: props.color }}
            className={props.on ? "on" : ""} 
            // If you still want to be able to click it, 
            // you'll need to pass a toggle function from the parent
            onClick={props.toggle} 
        > 
        </button>
    )
}
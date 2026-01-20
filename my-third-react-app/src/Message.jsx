import React from "react"
export default function Message(){
    const [message,setMessage]= React.useState(["a","b"])
    
  
    
    return (
         <h1>
            {
            message.length ===0 ? "You have no messages to read "
            :message.length ===1 ? "You have 1 message to read"
            : `you have ${message.length} messages`}
            </h1>
          
            
    )
}
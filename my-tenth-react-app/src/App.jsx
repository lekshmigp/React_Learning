import React from "react"
import star from "./assets/star.png"
import starcol from "./assets/starcol.png"
export default function App(){
  const[contact ,setContact]=React.useState({
        firstName:"John",
        lastName:"Doe",
        phoneNumber : 1234567890,
        isFavourite:false
  })
 function toggleStar(){
  setContact( prev =>(
    {...prev, isFavourite: !prev.isFavourite}
  ))
 }

  const starIcon = contact.isFavourite? star: starcol
  return (
    <>
    <main>
      <article>
        <div> The name is {contact.firstName} {contact.lastName}</div>
        <div> The phone number is {contact.phoneNumber}</div>
        <button onClick={toggleStar} aria-label="Toggle Star">
          <img src={starIcon} alt="favourite star" width="40" /> 
         </button>
      </article>
    </main>
    </>
  )
}



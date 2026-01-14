import React from "react"
export default function  Toggle(){
const [isupvalue, setIsUpValue]= React.useState(false)

function handled(){
    setIsUpValue (prev => !prev)
}
return (
    <>
 <div>The mode is in {isupvalue}</div>
  {/* ternary operator value shouls be inside the curly brackets  and the value given inside are string values */}
<button onClick={handled}> {isupvalue ? "Dark Mode" : "LightMode"} </button>
    </>
   
)
}

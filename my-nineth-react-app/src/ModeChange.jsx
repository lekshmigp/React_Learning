import React from "react"
export default function ModeChange(){

const[isDark,setIsDark]= React.useState(false);
    function click(){
        setIsDark(prev=> !prev)
    }

    return(
        <div className={isDark ? "dark" : "light"}>
            <h3> what mode do you want  switch accordingly  </h3>
            <button onClick={click}> {isDark ? "Dark Mode" : "Light Mode" }</button>
        </div>

    )
}
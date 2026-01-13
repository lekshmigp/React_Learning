import React from "react"
export default function Counter() {
    const [count, setCount] = React.useState(0);
  
    // mostly in using the arrow function use the previous ..it i sthe temporary variable 
    function clicked_yes(){
        setCount(prev => prev + 1)
    }
    
    function clicked_no(){
        console.log("The user clicked No ")
    }
    return (
      <div className="counter-container">
        <h2 className="title">Increase the nof of words you learnt  </h2>
        
        <div className="counter-ui">
        
          <button onClick={clicked_no} className="control-btn" aria-label="no"> NO</button>
          
          
          <div className="count-display">{count}</div>
          
       
          <button onClick={clicked_yes} className="control-btn" aria-label="yes"> YES</button>
        </div>
      </div>
    );
  }
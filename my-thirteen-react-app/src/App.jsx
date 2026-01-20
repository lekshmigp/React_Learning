// import React from 'react'
// import Nodes from "./Nodes.js"
// import Node from "./Node.jsx"

// export default function App() {
//   const [nodeList] = React.useState(Nodes)
//   const sequence = [4, 5, 2, 1, 0, 3]

//   const middleIndex = Math.floor(nodeList.length / 2)
//   const [activeIndex, setActiveIndex] = React.useState(middleIndex)

//   // Auto-rotate every 4 seconds
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prev =>
//         (prev + 1) % sequence.length
//       )
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [nodeList.length])

//   const buttonElements = nodeList.map((item, index) => (
//     <Node
//       key={item.id}
//       color={item.color}
//       on={index === activeIndex}
//     />
//   ))

//   return (
//     <main className="app">
//       <h2>Auto Rotating Nodes</h2>
//       <div className="card-grid">
//         {buttonElements}
//       </div>
//     </main>
//   )
// }
import React from 'react'
import Nodes from "./Nodes.js"
import Node from "./Node.jsx"

export default function App() {
  const [nodeList] = React.useState(Nodes)
  
  // 1. Define your custom order (using indices: 0-5)
  // If your IDs are 1-6, index 0 is ID 1, index 4 is ID 5, etc.
  const sequence = [4, 5, 2, 1, 0, 3] // This matches 5, 6, 3, 2, 1, 4
  
  // 2. Track which "step" of the sequence we are on
  const [step, setStep] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStep(prevStep => (prevStep + 1) % sequence.length)
    }, 250)

    return () => clearInterval(interval)
  }, [])

  // 3. Determine the active node based on the current step in the sequence
  const activeIndex = sequence[step]

  const buttonElements = nodeList.map((item, index) => (
    <Node
      key={item.id}
      color={item.color}
      on={index === activeIndex}
    />
  ))

  return (
    <main className="app">
      <h2>Custom Sequence Animation</h2>
      <div className="card-grid">
        {buttonElements}
      </div>
    </main>
  )
}
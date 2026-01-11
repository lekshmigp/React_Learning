//import both Data nd the Component here 
import Joke from "./Joke.jsx"
import JokesData from "./Joke.js"
function App() {
const Jokes= JokesData.map((joke)=>{
return(
  <Joke setup= {joke.setup} punchline ={joke.punchline} />
)
})
  
return (
  <main>
   {Jokes}
  </main>
  )
}

export default App

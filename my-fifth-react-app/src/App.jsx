import Joke from "./Joke.jsx"
function App() {
  

  return (
    <>
      <Joke 
        setup =  "The fish of the tail is small"
         punchline = "The cat tail is very big" 
         upvotes = {10}
         comments = {
          [
            { name: "", author : " ",titile : " "},
            { name: "", author : " ",titile : " "},
            { name: "", author : " ",titile : " "},

          ]
         }/>
      <Joke
      setup =  "The giraffe neck is very large" 
       punchline = "The mouse neck is very small"/>
      <Joke
    
      punchline  = "The zebra  is very small"/>
      


    </>
  )
}
    

export default App

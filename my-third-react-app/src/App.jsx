import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import MyImage from "./assets/im.png"

function App(){
  return (
    <>
      <Header />
        <Entry
            image={MyImage} 
            place="japn"
            month="January"
            mapLink="https://maps.app.goo.gl/JD83Tts8Kft2S1rh9"
            description= "Thsi is the japn visiting .I travelled around 13 hours to reach the destination and it was so fun to see it"
       />
       <Entry
            image= {MyImage}
            place="Bali"
            month="March"
            mapLink= "https://maps.app.goo.gl/JD83Tts8Kft2S1rh9"
            description= "Thsi is the Bali visiting .I travelled around 13 hours to reach the destination and it was so fun to see it"
       />
       <Entry
            image={MyImage}
            place="China"
            month="june"
            mapLink= "https://maps.app.goo.gl/JD83Tts8Kft2S1rh9"
            description= "Thsi is the China visiting .I travelled around 13 hours to reach the destination and it was so fun to see it"
     />
    </>
  )
}
export default App


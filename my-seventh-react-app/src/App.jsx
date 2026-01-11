import EntryData from "./Entry.js"
import Entry from "./Components/Entry.jsx"
import Header from "./Components/Header.jsx"
import MyImage from "./assets/img.png"
export default function App() {
  
    const Details= EntryData.map((detail,index)=>{
    return (
        <Entry key ={index}
       {...detail} />
    );})
    return (
      <>
      <Header />
      <main>
      {Details}
      </main>  
      </>
  )
}



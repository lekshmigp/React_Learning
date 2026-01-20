import { createRoot } from "react-dom/client"
import App from './App.jsx'
//dont forgot to import the dtails in the main.jsx 
import './index.css'


const root = createRoot(document.getElementById("root"))

root.render(
  <>
  <App darkMode ={true} />
  </>
)
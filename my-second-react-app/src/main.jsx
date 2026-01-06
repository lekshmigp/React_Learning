//dont forget to link the css file here or else it may not work and reflect the change sin the screen
import { createRoot } from "react-dom/client"
import App from "./App"
import Nav from "./components/Nav"
import Main from "./components/Main"
import "./index.css"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
  <App />
  <Nav />
  <Main />
  </>
)

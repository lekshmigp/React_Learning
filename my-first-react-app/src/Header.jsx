// made thi sfile to a sepearte and exported it using deafult is not needed to use the {} braces 
//component used in another page then the image or corresponding thing has alo needed to be imported in the same page 
import myImage from "./assets/img.png"
export default function HeaderComponent(){
    return( 
    <header>
        <img src ={myImage} alt="My image imported" width = "40px" />
        <nav>
          <ol>
            <li className="nav-list">Pricing</li>
            <li className="nav-list">Cost</li>
            <li className="nav-list">Quality</li>
          </ol>
        </nav>
    </header>
    )
  }
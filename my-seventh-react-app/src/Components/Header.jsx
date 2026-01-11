import MyImage from "../assets/img.png"
function Header(){
    return (
        <header>
            <img src= {MyImage}/>
            <h1>My Site visited in this year</h1>
        </header>
    )
}
export default Header
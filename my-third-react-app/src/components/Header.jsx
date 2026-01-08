import MyImage from "../assets/im.png"
function Header(){
    return (
        <header>
            <img src= {MyImage}/>
            <h1>My Site visited</h1>
        </header>
    )
}
export default Header
import MyImage from "../assets/im.png"
export default  function Entry(){
    return(
        <article className="entry">
            <div className="main-container">
        <img  className="main-image" src= {MyImage} alt="image text"/>
        </div>
        <div>
            <span> Japan</span>
            <a href="https://maps.app.goo.gl/JD83Tts8Kft2S1rh9">Visit to Japan </a>
        </div>
        </article>
    )
}
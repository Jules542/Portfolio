import Texts from "../components/Presentation/Texts";
import Diplomes from "../components/Presentation/Diplomes";

const Presentation = () => {

    const ITPath = "/src/assets/images/certificate.png";

    return (
        <div className="presentation-content">
            <div className="presentation-title-container" style={{animationDelay:'0.5s'}}>
                <h1>Jules RIBEIRO</h1>
                <img src={ITPath} />
            </div>
            <div className="components-container">
                <Texts />
                <Diplomes />
            </div>
            <p className="link-to-projets"><a href="/projets">Découvrir mes projets</a></p>
        </div>
    )
}

export default Presentation;
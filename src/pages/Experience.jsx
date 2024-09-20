import BTS from "../components/Experience/BTS.jsx";

const Experience = () => {

    const expIconPath = "/src/assets/images/professional.png"

    return (
        <div className="experience-container">
            <div className="experience-title-container">
                <div className="title-container-center">
                    <h2>Mon expérience</h2>
                    <img src={expIconPath} />
                </div>
            </div>
            <BTS />
        </div>
    )
}

export default Experience;
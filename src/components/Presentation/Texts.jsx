import React from "react";

const Texts = () => {

    const IT_path = "src/assets/images/IT.png";
    const SDV_path = "src/assets/images/SDV.png";

    return (
        <div className="texts-container">
            <div className="texts1">
                <div className="info-image" style={{animationDelay: '1s'}}>
                    <img src={IT_path} />
                </div>
                <div className="texts" style={{animationDelay: '1s'}}>
                    <div className="text1">
                        <p>Après avoir décroché un Baccalauréat STMG, je décide de m’orienter dans le milieu de l’informatique, et plus précisément dans le développement Web.</p>
                    </div>
                    <div className="text2">
                        <p>J’ai donc étudié dans l’établissement Saint-Adjutor de Vernon (27) afin d’obtenir un BTS Services Informatiques aux Organisations (SIO) en spécialité SLAM (Solutions logicielles et applications métiers).</p>
                    </div>
                </div>
            </div>
            <div className="texts2">
                <div className="texts" style={{animationDelay: '1s'}}>
                    <div className="text1">
                        <p>Je poursuis actuellement mes études en 3<sup>ème</sup> année de Bachelor dans l'école SupDeVinci de Paris La Défense en Développement informatique.</p>
                    </div>
                </div>
                <div className="ecole-image" style={{animationDelay: '1s'}}>
                    <img src={SDV_path} />
                </div>
            </div>
        </div>
    )
}

export default Texts;
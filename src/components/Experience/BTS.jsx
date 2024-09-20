import { useNavigate } from "react-router-dom";

const BTS = () => {

    const stage1Path = "/src/assets/images/Stage1.png";
    const stage2Path = "/src/assets/images/Stage2.png";

    return (
        <div className="BTS-container" style={{animationDelay: "0.5s"}}>
            <ul className="ecole">
                <li>BTS SIO (2022-2024)</li>
                <br></br>
                <ul className="annee-bts">
                    <div className="stage1">
                        <div className="stage1-text">
                            <li>1<sup>ère</sup> année</li>
                            <p>Stage du 29/05 au 30/06/2023 (5 semaines) chez <a href="https://atontechnologies.org" target="_blank">ATON Technologies</a>.</p>
                            <p>Création d’un site Web dans le but de présenter au public un projet de R&D.</p>
                            <br></br>
                            <p className="text-rapport"><a href="https://mega.nz/file/cWVGjDga#yd6gjXXHfsEjPwXoHGDUxn4qgap24HGLiJL85AM1uGU" target="_blank">Rapport de stage</a></p>
                        </div>
                        <div className="stage1-image">
                            <img src={stage1Path} />
                            <p className="stage-image-text"><a>Voir le projet</a></p>
                        </div>
                    </div>
                    <br></br>
                    <div className="stage2">
                        <div className="stage2-text"> 
                            <li>2<sup>ème</sup> année</li>
                            <p>Stage du 22/01 au 01/03/2024 (6 semaines) chez <a href="https://atontechnologies.org" target="_blank">ATON Technologies</a>.</p>
                            <p>Création d’une application Web destinée au suivi des indicateurs de mesure d’un générateur atmosphérique d’eau.</p>
                            <br></br>
                            <p className="text-rapport"><a href="https://mega.nz/file/9eFHCKxB#UgO47XDgaJvTyWN42-SrGrHXr4nm7PzufdaGuv7txVU" target="_blank">Rapport de stage</a></p>
                        </div>
                        <div className="stage2-image">
                            <img src={stage2Path} />
                            <p className="stage-image-text"><a>Voir le projet</a></p>
                        </div>
                    </div>
                </ul>
            </ul>
        </div>
    )
}

export default BTS;
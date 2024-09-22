
const Diplomes = () => {

    const NivEtude = "/src/assets/images/Bac+2.png";

    return (
        <div className="diplomes-container">
            <div className="diplome-title">
                <h2>Études</h2>
            </div>
            <div className="diplomes-content">
                <div className="diplomes-texts-container">
                    <div className="diplomes-texts">
                        <li>Cycle Bachelor 3<sup>ème</sup> année en Développement Informatique (2024-2025)</li>
                        <p>École Sup De Vinci à Paris (75)</p>
                        <br></br>
                        <li>BTS SIO spécialité SLAM (2022-2024)</li>
                        <p>Lycée Saint-Adjutor de Vernon (27)</p>
                        <br></br>
                        <li>Baccalauréat STMG (2022)</li>
                        <p>Lycée Notre-Dame de Mantes-la-Jolie (78)</p>
                    </div>
                </div>
                <div className="diplomes-niveau">
                    <h3>Niveau actuel :</h3>
                    <img src={NivEtude} />
                </div>
            </div>
        </div>
    )
}

export default Diplomes;
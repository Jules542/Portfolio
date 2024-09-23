import Stack from '../components/Competences/Stack.jsx';
import Certifs from '../components/Competences/Certifs.jsx';


const Competences = () => {

    const ImagePath = "/src/assets/images/competences.png";
    const certificatePath = "/src/assets/images/certification.png";

    const stackData = [
        {
            title: "Front-end",
            stacks: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React.js"]
        },
        {
            title: "Back-end",
            stacks: ["PHP", "Symfony", "Node.js", "Express.js", "API REST", "EJS", "MySQL", "SQL Server", "C#", "Python"]
        },
        {
            title: "Méthodes",
            stacks: ["VSCode", "Figma", "Git", "GitHub", "Agile", "Scrum", "Trello"]
        }
    ]

    const certifsData = [
        {
            title: "FreeCodeCamp - Responsive Web Design",
            img: "/src/assets/images/freecodecamp.png",
            desc: "Développer ses compétences en CSS et apprendre à rendre des pages Web Responsive (Adapter le contenu au format de l’écran).",            
            date: "2024"
        },
        {
            title: "Atelier RGPD (CNIL)",
            img: "/src/assets/images/atelierrgpd.png",
            desc: "Formation en ligne gratuite et ouverte à tous permettant de sensibiliser les professionnels à la protection des données et d’accompagner leur mise en conformité.",
            date: "2024"
        },
        {
            title: "SecNumAcademie (ANSSI)",
            img: "/src/assets/images/secnum.png",
            desc: "Connaître et apprendre de manière ludique les notions de base de la cybersécurité, et ainsi agir efficacement sur la protection des outils numériques.",
            date: "2024"
        },
        {
            title: "PIX",
            img: "/src/assets/images/pix.png",
            desc: "Évaluer, développer et certifier ses compétences numériques 🤡.",
            date: "2024"
        },
        {
            title: "Projet Voltaire (509 points)",
            img: "/src/assets/images/projetvoltaire.png",
            desc: "Service en ligne de formation à la maîtrise de l'orthographe et de l'expression.",
            date: "2023"
        },
        {
            title: "Cisco NetAcad - Cybersecurity Essentials",
            img: "/src/assets/images/cybersecurityessentials.png",
            desc: "Apprendre les notions plus avancées : principes de sécurité, caractéristiques de cyber-crimes, sécurité des réseaux.",
            date: "2022"
        },
        {
            title: "Cisco NetAcad - Introduction to Cybersecurity",
            img: "/src/assets/images/cybersecurityintro.png",
            desc: "Apprendre les notions de base de la cybersécurité.",
            date: "2022"
        },
    ]

    return (
        <div className="competences-container">
            <div className="title-competences-container">
                <h2>Mes compétences</h2>
                <img src={ImagePath} />
            </div>
            <div className='stacks-container'>
            {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} stacks={stack.stacks} />
                ))}
            </div>
            <div className='certifs-container'>
                <div className='certifs-container-title'>
                    <h2>Certifications :</h2>
                    <img src={certificatePath} />
                </div>
            {certifsData.map((certif, index) => (
                <Certifs key={index} title={certif.title} img={certif.img} desc={certif.desc} date={certif.date} />
                ))}
            </div>
        </div>
    )
}

export default Competences;
import Stack from '../components/Competences/Stack.jsx';

const Competences = () => {

    const ImagePath = "/src/assets/images/competences.png";
    const certificatePath = "/src/assets/images/certification.png";

    const stackData = [
        {
            title: "Front-end",
            stacks: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React.js"],
            delay: "0.3s"
        },
        {
            title: "Back-end",
            stacks: ["PHP", "Symfony", "Node.js", "Express.js", "API REST", "EJS", "MySQL", "SQL Server", "C#", "Python"],
            delay: "0.6s"
        },
        {
            title: "Méthodes",
            stacks: ["VSCode", "Figma", "Git", "GitHub", "Agile", "Scrum", "Trello"],
            delay: "0.9s"
        }
    ]

    return (
        <div className="competences-container">
            <div className="title-competences-container">
                <h2>Mes compétences</h2>
                <img src={ImagePath} />
            </div>
            <div className='stacks-container'>
            {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} stacks={stack.stacks} delay={stack.delay} />
                ))}
            </div>
        </div>
    )
}

export default Competences;
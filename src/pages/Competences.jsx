import Stack from '../components/Competences/Stack.jsx';


const Competences = () => {

    const ImagePath = "/src/assets/images/competences.png";

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

    return (
        <div className="competences-container">
            <div className="title-competences-container">
                <h1>Mes compétences</h1>
                <img src={ImagePath} />
            </div>
            <div className='stacks-container'>
            {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} stacks={stack.stacks} />
                ))}
            </div>
        </div>
    )
}

export default Competences;
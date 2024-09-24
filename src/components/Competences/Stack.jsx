
const Stack = ({ title, stacks, delay }) => {

    return (
        <div className="stack-container" style={{ animationDelay: `${delay}`}}>
            <div className="stack-title">
                <h2>{title}</h2>
            </div>
            <div className="stack-texts">
                {stacks.map((stack, index) => (
                    <p key={index}>{stack}</p>
                ))}
            </div>
        </div>
    )
}

export default Stack;

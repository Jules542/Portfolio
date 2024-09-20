
const Cartes = ({image, titre, tags, delay, lien, onClick}) => {


    return (
        <div className="projet-carte" style={{ animationDelay: `${delay}s` }} onClick={onClick}>
            <img src={image} />
            <div className="projet-texts">
                <p className="projet-titre">{titre}</p>
                <p className="projet-tags">{tags.join(" ")}</p>
            </div>
        </div>
    )
}

export default Cartes;
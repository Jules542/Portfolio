
const Certifs = ({title, img, desc, date}) => {
    return (
        <div className="certif-container">
            <div className="certif-top">
                <p>{title}</p>
                <img src={img} />
            </div>
            <div className="certif-desc">
                <p>{desc}</p>
            </div>
            <p className="certif-date">Année d'obtention : {date}</p>
        </div>
    )
}

export default Certifs;
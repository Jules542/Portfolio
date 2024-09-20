
const Popup = ({ image, titre, tasks, features, tags, lien, date, onClose }) => {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <span className="close-btn" onClick={onClose}>&times;</span>
          <div className="popup-left">
            <img src={image} alt={titre} />
          </div>
          <div className="popup-right">
            <h2>{titre}</h2>
            {date && <p className="popup-date">Date : {date}</p>}

            <p className="popup-tasks">Tâches :</p>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
            
            <p className="popup-features">Fonctionnalités :</p>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <p className="popup-tags">{tags.join(" ")}</p>
            {lien && <a href={lien} target="_blank" rel="noopener noreferrer">Voir le projet</a>}
          </div>
        </div>
      </div>
    );
  };
  
  export default Popup;
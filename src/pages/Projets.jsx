import Cartes from "../components/Projets/Cartes.jsx";
import Order from "../components/Projets/Order.jsx";
import Popup from "../components/Projets/Popup.jsx";
import {useState} from 'react';


const Projets = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const projetsData = [
        {
            image: "/src/assets/images/AP1.png",
            titre: "Création d'un site Web pour améliorer la présence d'un chauffagiste sur Internet",
            tasks: ["Modélisation de la base de données", "Élaboration de maquettes", "Séparation des tâches", "Développement"],
            features: ["Page 'Présentation' (Modification du texte possible en tant qu'admin)", "Page 'Prestations' (Ajout, Modification et Suppression)", "Page 'Avis' (Vue admin et vue client) (Formulaire)", "Page 'Contact' (Formulaire de contact)"],
            tags : ["#ExerciceBTS", "#GroupeDe3", "#PHP", "#Symfony", "#MySQL"],
            date: "11-2023",
            delay: "1",
            lien: "https://github.com/Karistophal/Chauda"
        },
        {
            image: "/src/assets/images/AP2.png",
            titre: "Application de gestion et de suivi des autorisations de mise sur le marché de médicaments pour GSB",
            tasks: ["Modélisation de la base de données", "Élaboration de maquettes", "Séparation des tâches", "Développement"],
            features: ["Interface d'ajout de médicament", "Interface de gestion des étapes de validation"],
            tags : ["#ExerciceBTS", "#GroupeDe3", "#C#", "Windows Forms", "#SQL Server"],
            delay: "1.2",
            date: "01-2024",
            lien: ""
        },
        {
            image: "/src/assets/images/AP3.png",
            titre: "Développement d'une application Web responsive pour les employés du parc Astérix",
            tasks: ["Modélisation de la base de données", "Élaboration de maquettes", "Séparation des tâches", "Développement"],
            features: ["Page de connexion Admin/User", "Page de présentation des attractions avec système de tri", "Affichage des missions à réaliser pour l'utilisateur connecté", "Gestion des alertes pour l'admin", "Gestion des utilisateurs pour l'admin", "Adaptation du contenu des pages au format de l'écran (Responsive)"],
            tags : ["#ExerciceBTS", "#GroupeDe3", "#JavaScript", "#React", "#SCSS", "#API REST", "#NodeJS", "#MySQL"],
            delay: "1.4",
            date: "05-2024",
            lien: "https://github.com/Jules542/AP03_TKT"
        },
        {
            image: "/src/assets/images/Stage1.png",
            titre: "Création d'un site Web pour présenter un projet de R&D de l'entreprise ATON Technologies",
            tasks: ["Rédaction d'un cahier des charges", "Élaboration de maquettes", "Développement"],
            features: ["Page de présentation", "Formulaire de contact", "Gestion des abonnements à la newsletter"],
            tags: ["#Stage", "#ProjetIndividuel", "#Wordpress"],
            delay: "1.6",
            date: "06-2023",
            lien: ""
        },
        {
            image: "/src/assets/images/Stage2.png",
            titre: "Développement d'une application Web pour le suivi des indicateurs de mesure d'un générateur atmosphérique d'eau",
            tasks: ["Modélisation de la base de données", "Élaboration de maquettes", "Séparation des tâches", "Développement"],
            features: ["Interface de connexion", "Page de présentation des données sous forme de tableau et de graphique", "Exportation des données au format Excel et PDF", "Importation de données format .csv vers la base de données"],
            tags: ["#Stage", "#GroupeDe2", "#PHP", "#Symfony"],
            delay: "1.8",
            date: "02-2024",
            lien: ""
        },
        {
            image: "/src/assets/images/Therapeute.png",
            titre: "Création d'un site Web présentant le parcours de formation de la meilleure thérapeute du monde (ma mère) et ses services de thérapie",
            tasks: ["Élaboration de maquettes", "Développement"],
            features: ["Page de présentation", "Formulaire de contact"],
            tags: ["#ProjetIndividuel", "#Wordpress"],
            delay: "2",
            date: "08-2024",
            lien: "https://therapeutefamilial-yvelines.fr"
        },
        {
            image: "/src/assets/images/LDR.png",
            titre: "Développement d'une application Web affichant des données récupérées de l'API de Riot Games s'actualisant chaque jour",
            tasks: ["Modélisation de la base de données", "Élaboration de maquettes", "Développement"],
            features: ["Script Python appelant des routes d'une API pour envoyer les données vers une BDD MySQL", "Récupération des données vers une vue", "Mise en forme des données", "Page de statistiques"],
            tags: ["#EnCours...", "#ProjetIndividuel", "#JavaScript", "#NodeJS", "#MySQL", "#Python"],
            delay: "2.2",
            date : "",
            lien: "https://loldailyrecap.alwaysdata.net"
        }
    ];

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    }

    return (
        <div className="projets-page-container">
            <div className="projets-title-container">
                <h1>Mes projets</h1>
            </div>
            <div className="order-container">
                <Order />        
            </div>
            <div className="cartes-container">
                {projetsData.map((carte, index) => (
                    <Cartes key={index} image={carte.image} titre={carte.titre} tags={carte.tags} delay={carte.delay} lien={carte.lien} onClick={() => handleCardClick(carte)}/>
                ))}
            </div>
            {selectedProject && (
                <Popup 
                    image={selectedProject.image}
                    titre={selectedProject.titre}
                    tasks={selectedProject.tasks}
                    features={selectedProject.features}
                    tags={selectedProject.tags}
                    lien={selectedProject.lien}
                    date={selectedProject.date}
                    onClose={closePopup}
                />
            )}
        </div>
    )
}

export default Projets;
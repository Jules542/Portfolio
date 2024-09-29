import React from "react";
import Title from "../components/Home/Title";
import Cards from "../components/Home/Cards";

//Importer les images
import Diplome from "../assets/images/certificate.png";
import Projects from "../assets/images/idea.png";
import Competences from "../assets/images/competences.png";
import Certifications from "../assets/images/certification.png";
import Contact from "../assets/images/contacts.png";
import { redirect } from "react-router-dom";

const Home = () => {
    // Données pour les cartes (image + texte)
    const cardsData = [
        {
        image: Diplome,
        text: 'Mon parcours',
        delay: '1.5',
        redirect: 'presentation',
        },
        {
        image: Projects,
        text: 'Mes projets',
        delay: '1.8',
        redirect: 'projets',
        },
        {
        image: Competences,
        text: 'Mes compétences',
        delay: "2.1",
        redirect: 'competences',
        },
        {
        image: Certifications,
        text: 'Mes certifications',
        delay: '2.4',
        redirect: 'certifications',
        },
        {
        image: Contact,
        text: 'Me Contacter',
        delay: '2.7',
        redirect: 'contact',
        }
    ];

    return (
        <div className="home-content">
            <Title />
            <div className="cards-container">
            {cardsData.map((card, index) => (
            <Cards key={index} image={card.image} text={card.text} delay={card.delay} redirect={card.redirect}/>
            ))}
            </div>
        </div>
    );
}

export default Home;
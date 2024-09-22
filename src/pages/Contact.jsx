
const Contact = () => {

    const ContactImagePath = "/src/assets/images/contacts.png";

    return (
        <div className="contact-content-container">
            <div className="contact-title-container">
            <h1>Contact</h1>
            <img src={ContactImagePath} />
            </div>
            <p>Vous pouvez me contacter par mail à l'adresse suivante :</p>
        </div>
        )
}

export default Contact;
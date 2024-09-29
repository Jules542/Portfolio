import Form from '../components/Contact/Form.jsx';

const Contact = () => {

    const ContactImagePath = "/src/assets/images/contacts.png";

    return (
        <div className="contact-content-container">
            <div className="contact-title-container">
            <h1>Contact</h1>
            <img src={ContactImagePath} />
            </div>
            <div className='contact-text-container'>    
                <div className='form-container'>
                    <Form />
                </div>
                <div className='contact-info-container'>
                    <div className='contact-coordonnees'>
                        <h2>Coordonnées : </h2>
                        <p>Adresse : 1 rue de la Paix, 75000 Paris</p>
                        <p>Téléphone : 01 02 03 04 05</p>
                        <p>Email :</p>
                    </div>
                    <div className='contact-reseaux'>

                    </div>
                </div>
            </div>
        </div>
        )
}

export default Contact;
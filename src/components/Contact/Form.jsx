
const Form = () => {
    return (
        <form id="contact-form">
            <div className="form-name">
                <div className="form-name-nom">
                    <label for="nom">Nom<sup>*</sup></label>
                    <input type="text" id="nom" name="nom" required></input>
                </div>
                <div className="form-name-prenom">
                    <label for="surname">Prénom</label>
                    <input type="text" id="prenom" name="prenom"></input>
                </div>
            </div>
            <div className="form-others">
                <label for="email">Email<sup>*</sup></label>
                <input type="email" id="email" name="email" required></input>
                <label for="sujet">Sujet<sup>*</sup></label>
                <input type="text" id="sujet" name="sujet" required></input>
                <label for="message">Message<sup>*</sup></label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
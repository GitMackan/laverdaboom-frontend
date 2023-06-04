import axios from "axios";
import { useEffect, useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://laverdaboom-api.herokuapp.com/email",
        {
          name,
          email,
          message,
        }
      );
    } catch (error) {
      console.error("Failed.", error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="form-left">
          <h2>Kontakta oss</h2>
          <p>
            Har du några frågor eller funderingar, tveka inte att kontakta oss.
            Det kan ni göra antingen via detta formulär eller direkt till:
          </p>
          <div className="contact-info">
            <p>Sandra Brännström</p>
            <ul>
              <li>Sigfrid Edströms Gata 25B</li>
              <li>72466 Västerås</li>
              <li>sandra.brannstrom@hotmail.com</li>
              <li>070-773 91 50</li>
            </ul>
          </div>
          <div className="contact-info">
            <p>Rosa Johansson</p>
            <ul>
              <li>Tunnbrödsvägen 3</li>
              <li>724 84 Västerås</li>
              <li>rosajohansson@hotmail..se</li>
              <li>073-947 98 79</li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-input-field-container">
            <label htmlFor="">Namn:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact-form-input-field-container">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact-form-input-field-container">
            <label htmlFor="">Meddelande:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="contact-form-input-field-container">
            <button type="submit" className="submitBtn">
              Skicka meddelande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

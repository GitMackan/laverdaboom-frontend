import axios from "axios";
import { useEffect, useState } from "react";
import "./Contact.scss";
import { BarLoader } from "react-spinners";
import Modal from "react-modal";
import SucessModal from "../components/SucessModal";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const URL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      await axios.post(`${URL}/email`, {
        name,
        email,
        message,
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed.", error);
    }
    setLoading(false);
    setSuccess(true);
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
              {loading ? (
                <BarLoader color="white" width={"50%"} />
              ) : (
                "Skicka meddelande"
              )}
            </button>
          </div>
        </form>
        {success && (
          <SucessModal
            isOpen={success}
            onClose={() => setSuccess(false)}
            title="Title"
            message="Test"
          />
        )}
      </div>
    </div>
  );
};

export default Contact;

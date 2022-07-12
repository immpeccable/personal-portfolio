import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import spinImg from '../images/1497 (1).gif'

let Contact = () => {
  const form = useRef();

  const [isInProcess, setIsInProcess] = useState(false);
  const [alertContext, setAlertContext] = useState("");
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function setProcessingGif(){
    if(isInProcess){ 

      return <div className="processing-gif">
       <img className="spin-gif" src={spinImg} alt = "error"></img>

      </div>
    }
  }

  function handleSubmit(e) {
    
    e.preventDefault();


    if (name === "") {
      setIsAlertShown(true);
      setAlertContext("Contact name can not be empty!")
      return;
    }
    if (email === "") {
      setIsAlertShown(true);
      setAlertContext("Contact email can not be empty!")
      return;
    }
    if (message === "") {
      setIsAlertShown(true);
      setAlertContext("Contact message can not be empty!")
      return;
    }
    
    setIsInProcess(true);
    

    console.log(form.current);

    emailjs
      .sendForm(
        'service_31ujhzh',
        'template_ejxqgpt',
        form.current,
        '4du8p9Hw8xtZkq3py'
      )
      .then(
        (result) => {
          setIsInProcess(false);
          setIsAlertShown(true);
          setAlertContext("Your e-mail successfully sent!")
          
        },
        (error) => {
          setIsInProcess(false);
          setIsAlertShown(true);
          setAlertContext("There was an error while sending the e-mail, please try again.")
        }
      );
  }

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">CONTACT</h2>

      <form className="form-wrapper" ref={form} onSubmit={handleSubmit}>
        <input name = "from_name" type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="name-input"
          placeholder="Your name..."
        ></input>
        <input type="email" name = "email_id"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="email-input"
          placeholder="Your e-mail..."
        ></input>
        <textarea name = "message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="message-input"
          placeholder="Your message..."
        ></textarea>
        <input type="submit" className="contact-button" value="GET IN TOUCH"></input>
        {setProcessingGif()}
        <div className={`alert ${isAlertShown ? 'alert-shown' : 'alert-hidden'}`} onTransitionEnd={() => setIsAlertShown(false)}>
          <strong>{alertContext}</strong>
        </div>
      </form>
    </div>
  );
};

export default Contact;

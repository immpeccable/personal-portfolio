import { useState } from "react";
import "./Contact.css";
import { send } from 'emailjs-com';

let Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e){

        if(name === ""){
            return;
        }
        if(email === ""){
            return;
        }
        if(message === ""){
            return;
        }
        
    }


  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">CONTACT</h2>

      <input onChange={(e)  => {setName(e.target.value)}} className="name-input" placeHolder="Your name..."></input>
      <input onChange={(e)  => {setEmail(e.target.value)}} className="email-input" placeHolder="Your e-mail..."></input>
      <textarea onChange={(e)  => {setMessage(e.target.value)}} className="message-input" placeHolder="Your message..."></textarea>
      <button onClick={(e) => handleSubmit(e)} className="contact-button">GET IN TOUCH</button>
    </div>
  );
};

export default Contact;

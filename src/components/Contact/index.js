import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

let Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") {
      alert("Contact name can not be empty!");
      return;
    }
    if (email === "") {
      alert("Contact email can not be empty!");
      return;
    }
    if (message === "") {
      alert("Contact message can not be empty!");
      return;
    }

    emailjs
      .sendForm(
        'service_31ujhzh',
        'template_ejxqgpt',
        form.current,
        '4du8p9Hw8xtZkq3py'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">CONTACT</h2>

      <form className="form-wrapper" ref={form} onSubmit={handleSubmit}>
        <input type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="name-input"
          placeholder="Your name..."
        ></input>
        <input type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="email-input"
          placeholder="Your e-mail..."
        ></input>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="message-input"
          placeholder="Your message..."
        ></textarea>
        <input type="submit" className="contact-button" value="GET IN TOUCH">
          
        </input>
      </form>
    </div>
  );
};

export default Contact;

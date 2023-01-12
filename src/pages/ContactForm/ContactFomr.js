import React, { useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_9t2p0qc",
        "template_22rnnya",
        templateParams,
        "u4VJSr8NMaAmnFkfg"
      )
      .then(
        (response) => {
          console.log("Email enviado!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Houve um erro:", err);
        }
      );
  }

  return (
    <div id="contact" className="ContainerGeralForm">
      <h1 className="title">Contato</h1>
      <form className="form" onSubmit={sendEmail}>
        <input
          className="inputForm"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="inputForm"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="buttonForm" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;

import React from "react";
import "./styleFooter.css";
import { ImWhatsapp, ImLinkedin2, ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="ContainerFooter">
      <span className="infofooter">Made by Débora Cabrera</span>
      <div className="Redes">
        <a
          id="link"
          href="https://wa.me/5516999921373"
          target="_blank"
          rel="noreferrer"
        >
          <ImWhatsapp
            style={{
              Color: "s#c192af",
              padding: "0.3rem",
            }}
          />
        </a>
        <a
          id="link"
          href="https://www.linkedin.com/in/d%C3%A9bora-cristina-cabrera-3753b8211/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin2
            style={{
              Color: "#c192af",
              padding: "0.3rem",
            }}
          />
        </a>

        <a
          id="link"
          href="https://github.com/Deby2021"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub
            style={{
              Color: "#c192af",
              padding: "0.3rem",
            }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

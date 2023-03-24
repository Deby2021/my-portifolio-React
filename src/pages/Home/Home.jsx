import React from "react";
import "./styles.css";
import ButtonDownlaod from "../../components/ButtonDownload/ButtonDownload";
import curriculum from "../../assets/CurriculoDev.pdf";
import { IoLogoLinkedin } from "react-icons/io5";
import lappink from "../../assets/lappink.png";
import GlobalStyle from "../../styles/GlobalStyle";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <div id="home" className="HomeContainer">
        <div className="Texts">
          <p className="hello">Olá, eu sou</p>
          <h1>Débora Cabrera</h1>

          <div className="buttonInline">
            <div className="button">
              <ButtonDownlaod
                className={"ButtonDownlaod"}
                href={curriculum}
                download={"CurriculoDEV"}
                text="Download CV"
                color={"white"}
                backgroundColor={"white"}
              />
            </div>

            <div className="button">
              <a
                className="linkedinButton"
                href="https://www.linkedin.com/in/d%C3%A9bora-cristina-cabrera-3753b8211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
        <img className="imagem" src={lappink} alt="imagem" />
      </div>
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
import "./styles.css";
import debora from "../../assets/debora.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="about" className="Container">
      <div className="Info animation" data-aos="fade-right">
        <div>
          <img className="ImgContainer" src={debora} alt="perfil" />
        </div>
        <div className="Abouts">
          <h1>Sobre mim:</h1>
          <p className="pAbout">
            &nbsp;&nbsp;&nbsp;Olá meu nome é Débora e sou desenvolvedora web
            front end há 6 meses. Tenho experiência em{" "}
            <span>HTML, CSS, JavaScript </span>e a biblioteca <span>React</span>
            , estou aprendendo a utilizar o<span> Styled-Components</span> e
            também utilizo a ferramenta de controle de versão, como o{" "}
            <span>GIT</span>.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; Gosto de aprender coisas novas, e sempre que
            posso aproveito para me manter atualizada sobre as últimas
            tendências e tecnologias no mercado de desenvolvimento web.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; Também sou <span> proativa</span> e gosto de
            trabalhar em equipe, pois acredito que todos podem aprender uns com
            os outros. Acredito também que a <span> comunicação</span> é a chave
            do sucesso para qualquer projeto, desenvolvendo e trabalhando em
            conjunto, pois somos mais fortes juntos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

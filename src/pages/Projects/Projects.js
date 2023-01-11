import React, { useEffect, useState } from "react";
import "./style_proj.css";
import api from "../../services/api";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    async function LoadProj() {
      await api
        .get("/repos")
        .then((response) => setProject(response.data))
        .catch((error) => console.log("Ops, ocorreu um erro" + error));
    }
    LoadProj();
  }, []);

  //console.log(project);
  //console.log(project.filter((p) => p.description === "Live Server"));
  const proj = project.filter((p) => p.description === "Live Server");

  //const orcs = personagens.filter(function (personagem) {
  //return personagem.raca === "Orc";
  //});

  return (
    <div className="ContainerGeral" id="projects">
      <h1>Projetos</h1>
      <div className="ContainerProj">
        {proj.map((item) => {
          return (
            <div className="Card" key={item.id}>
              <h3>{item.name}</h3>
              <a href={item.clone_url} target="_blank" rel="noreferrer">
                Link do Projeto
              </a>
              <a href={`${item.homepage}`} target="_blank" rel="noreferrer">
                Live Server
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

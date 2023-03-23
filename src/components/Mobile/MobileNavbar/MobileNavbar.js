import { GiStarsStack } from "react-icons/gi";
import {
  MdHome,
  MdAdd,
  MdTextSnippet,
  MdOutlineLocalPhone,
} from "react-icons/md";

import "./mobileNavbar.css";

const MobileNavbar = (props) => {
  return (
    <>
      <ul className="wrapper">
        <li className="icon home">
          <MdHome onClick={() => props.isMobile} />
          <a className="tooltip" href={`#home`}>
            Página Inicial
          </a>
        </li>

        <li className="icon MdAdd">
          <MdAdd onClick={() => props.isMobile} />
          <a className="tooltip" href={`#about`}>
            Sobre Mim
          </a>
        </li>

        <li className="icon GiStarsStack">
          <GiStarsStack onClick={() => props.isMobile} />
          <a className="tooltip" href={`#skills`}>
            Habilidades
          </a>
        </li>

        <li className="icon MdTextSnippet">
          <MdTextSnippet onClick={() => props.isMobile} />
          <a className="tooltip" href={`#projects`}>
            Projetos
          </a>
        </li>

        <li className="icon MdOutlineLocalPhone">
          <MdOutlineLocalPhone onClick={() => props.isMobile} />
          <a className="tooltip" href={`#contact`}>
            Contato
          </a>
        </li>
      </ul>
    </>
  );
};

export default MobileNavbar;

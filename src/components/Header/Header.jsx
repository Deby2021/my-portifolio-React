import React from "react";
import "./style.css";
import { GiStarsStack } from "react-icons/gi";
import {
  MdHome,
  MdAdd,
  MdTextSnippet,
  MdOutlineLocalPhone,
} from "react-icons/md";

const Header = ({ ...props }) => {
  return (
    <>
      <navbar className="NavBarContainer">
        <ul className="List">
          <li>
            <MdHome />
            <a href={`#home`}>{props.home}</a>
          </li>
          <li>
            <MdAdd />
            <a href={`#about`}>{props.about}</a>
          </li>
          <li>
            <GiStarsStack />
            <a href={"#skills"}>{props.skills}</a>
          </li>
          <li>
            <MdTextSnippet />
            <a href={`#projects`}>{props.project}</a>
          </li>
          <li>
            <MdOutlineLocalPhone />
            <a href={`#contact`}>{props.contact}</a>
          </li>
        </ul>
      </navbar>
    </>
  );
};

export default Header;

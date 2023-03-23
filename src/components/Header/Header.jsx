import React, { useState } from "react";
import "./style.css";
import { GiStarsStack } from "react-icons/gi";
import {
  MdHome,
  MdAdd,
  MdTextSnippet,
  MdOutlineLocalPhone,
} from "react-icons/md";
import MobileNavbar from "../../components/Mobile/MobileNavbar/MobileNavbar";
import { CgMenu, CgClose } from "react-icons/cg";

const Header = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      className="Hamburger"
      size="30px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className="Hamburger"
      size="30px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(true);

  return (
    <>
      <nav className="NavBarContainer">
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
        {open ? closeIcon : hamburgerIcon}
        {open && <MobileNavbar isMobile={false} closeMobileMenu={false} />}
      </nav>
    </>
  );
};

export default Header;

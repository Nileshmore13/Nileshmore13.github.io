import React, { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.maindiv}>
      <nav className={styles.navbar}>
        <div className={styles.navlogo}>
          <img src="/Nilesh.jpg" alt="" />
        </div>
        <div>
          <ul 
            id={styles.nav_list}
            className={open ? styles.navbar : styles.active}
          >
            <li onClick={() => setOpen(!open)}>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link 
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link      
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                Skills
              </Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link               
                to="project"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                Project
              </Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link             
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div id={styles.mobile} onClick={() => setOpen(!open)}>
          {open ? (
            <GiHamburgerMenu color="black" fontSize={"24px"} />
          ) : (
            <VscChromeClose color="black" fontSize={"24px"} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

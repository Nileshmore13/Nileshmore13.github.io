import React from 'react'
import styles from "../Styles/Footer.module.css"
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className={styles.rootCont} id="contact">
        <p className={styles.contactHeading}>Contact Me</p>      
        <hr style={{ width: "95vw" }} />
        <p className={styles.text}>Liked my work? Want to get in touch?</p>
        <p className={styles.text}>You can reach out to me at:</p>
        <div className={styles.iconsCont}>
          <a href="mailto:nileshrmore13@gmail.com">
            <AiOutlineMail className={styles.emailicon} />
          </a>
          <a
            href="https://www.linkedin.com/in/nilesh-more-/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a href="https://github.com/Nileshmore13" rel="noreferrer" target="_blank">
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
        <p className={styles.text}>Phone: +91 8806932117</p>{" "}
        <p className={styles.text}>Email: Nileshrmore13@gmail.com</p>
    </div>
    </footer>
  )
}

export default Footer

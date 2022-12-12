import React from "react";
import styles from "../Styles/Home.module.css";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <div className={styles.home_section} id="home">
      <div className={styles.name_cont}>
        <p>Hi,</p>
        <p>
          I am <span>Nilesh More</span>{" "}
        </p>
        <p>
          A <span>Full Stack Web Developer</span>
        </p>
        {/* <a
          href="https://drive.google.com/file/d/1bzG2uS7E5SYB-xEwTmD51fiu-1U3v7JX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >resume</a> */}
        <div className={styles.resume_div}>
          <a href="https://drive.google.com/file/d/1bzG2uS7E5SYB-xEwTmD51fiu-1U3v7JX/view?usp=sharing" download>
            <button>
              <AiOutlineDownload color="white" /> Resume
            </button>
          </a>
        </div>
      </div>
      <div className={styles.image_cont}>
        <img
          src="https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

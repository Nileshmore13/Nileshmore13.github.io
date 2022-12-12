import React from "react";
import styles from "../Styles/Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills_div} id="skills">
      <div className={styles.innerSkills_Div}>
      <p>Skills</p>
        <div className={styles.skillsImages}>
          <img src="/javascript-logo.png" alt="" />
          <h5>Javascript</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/html.png" alt="" />
          <h5>HTML</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/css3.png" alt="" />
          <h5>CSS</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/react-logo.png" alt="" />
          <h5>React</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/redux.png" alt="" />
          <h5>Redux</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/typescript.png" alt="" />
          <h5>Typescript</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/node-js.png" alt="" />
          <h5>Nodejs</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/mongodb.png" alt="" />
          <h5>MongoDb</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/express.png" alt="" />
          <h5>Express</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/git.png" alt="" />
          <h5>Git</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/npm.png" alt="" />
          <h5>NPM</h5>
        </div>
        <div className={styles.skillsImages}>
          <img src="/postman.png" alt="" />
          <h5>Postman</h5>
        </div>
      </div>
    </div>
  );
};

export default Skills;



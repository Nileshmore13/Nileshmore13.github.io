import styles from "../Styles/About.module.css";

function About() {
  return (
    <div className={styles.about_div} id="about">
        <p>About</p>
        <div className={styles.main_div}>
          <div className={styles.profilePicCont}>
            <img src="../../IMG_20211108_204920_213.jpg" alt="" className={styles.profilePic} />
          </div>
          <div className={styles.info_div}>
            <h2>
              I am <span style={{color:"teal"}}>Nilesh More</span>
            </h2>
            <p>
              A web developer with a vast array of knowledge in many different
              front end and backend languages, responsive frameworks, databases,
              and best code practices. Look forward to using my skills for
              gaining more experience.
            </p>
          </div>
        </div>
    </div>
  );
}
export default About
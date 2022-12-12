import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "../Styles/github.module.css";

const Github = () => {
  return (
    <div className={styles.github_section}>
      <h1>My <span>Github Calendar</span></h1>
      <div className={styles.git}><GitHubCalendar blockSize={14} blockRadius={4} username="NileshMore13" /></div>
      <div className={styles.stats}>
      <div className={styles.git}>
        <p>
          <img
            src="https://github-readme-stats.vercel.app/api?username=nileshmore13&show_icons=true&locale=en"
            alt="nileshmore13"
          />
        </p>
      </div>
      <div className={styles.git}>
        <p>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=nileshmore13&"
            alt="nileshmore13"
          />
        </p>
      </div>
      </div>
      <div className={styles.git}>
        <p>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=nileshmore13&show_icons=true&locale=en&layout=compact"
            alt="nileshmore13"
          />
        </p>
      </div>
    </div>
  );
};

export default Github;

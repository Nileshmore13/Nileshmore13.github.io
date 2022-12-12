import React from "react";
import styles from "../Styles/Projects.module.css";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { SiNetlify,SiChakraui } from "react-icons/si";
import { IoLogoCss3,IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <h1 id="project">
        My Recent <span>Work</span>
      </h1>
      <p className={styles.desc}>
        Here are few <span>Projects</span> i have worked on recently
      </p>
      <div className={styles.projects_container}>
        <div className={styles.projects_cards}>
          <img
            className={styles.projects_img}
            src="https://user-images.githubusercontent.com/103635205/192556144-2828cb4c-4b65-45a8-b63e-c4680dc05fdb.png"
            alt=""
          />
          <div className={styles.projects_info}>
            <h3>PharmEasy - Clone</h3>
            <p>
              PharmEasy is a consumer healthcare that provides consumers with
              on-demand, home-delivered access to a wide range of prescription
              and healthcare products.
            </p>
            {/* <p>html css js</p> */}
            <div style={{ display: "flex",gap:"10px" }}>
              <IoLogoJavascript className={styles.icons} />
              <AiFillHtml5 className={styles.icons} />
              <IoLogoCss3 className={styles.icons} />
            </div>
          </div>
          <div className={styles.projects_buttons}>
            <a href="https://github.com/Nileshmore13/PharmEasy-Clone" target="_blank">
            <button>
              <p>Github</p> <AiFillGithub/>
            </button>
            </a>
            <a href="https://roaring-creponne-d99230.netlify.app/" target="_blank">
            <button>
              <p>Live</p> <SiNetlify/>
            </button>
            </a>
          </div>
        </div>
        <div className={styles.projects_cards}>
          <img
            className={styles.projects_img}
            src="https://camo.githubusercontent.com/7f800f4d21877416eedb3af1147872cb2e1ffd732230d6227229b93a267ec082/68747470733a2f2f74616869722d6d616e7a6f6f722d3131302e6769746875622e696f2f696d616765732f6c6966657374796c6573746f7265732e706e67"
            alt=""
          />
          <div className={styles.projects_info}>
            <h3>LifestyleStore - Clone</h3>
            <p>
              Lifestyle stores is an e-commerce website where all types of
              clothes and styling products are available for men, women, and
              kids.
            </p>
            {/* <p>html css js</p> */}
            <div style={{ display: "flex",gap:"10px" }}>
              <IoLogoJavascript className={styles.icons} />
              <AiFillHtml5 className={styles.icons} />
              <IoLogoCss3 className={styles.icons} />
            </div>
          </div>
          <div className={styles.projects_buttons}>
           <a href="https://github.com/Nileshmore13/LifeStyle-Store-Clone" target="_blank">
            <button>
               <p> Github</p> <AiFillGithub />
            </button>
            </a>
           <a href="https://dreamy-hotteok-ab0671.netlify.app/" target="_blank">
            <button>
              <p>Live</p> <SiNetlify />
            </button>
            </a>
          </div>
        </div>
        <div className={styles.projects_cards}>
          <img
            className={styles.projects_img}
            src="https://user-images.githubusercontent.com/105916310/206900992-8f897b73-ab23-4908-98f2-dc6d4361eaff.png"
            alt=""
          />
          <div className={styles.projects_info}>
            <h3>Ideakart - Clone</h3>
            <p>
              Ideakart is a site that gives u an idea about the book you want to
              buy. They offer a huge collection of books in diverse categories.
            </p>
            {/* <p>html css js</p> */}
            <div style={{ display: "flex",gap:"10px" }}>
              <FaReact className={styles.icons} />
              <AiFillHtml5 className={styles.icons} />
              <IoLogoCss3 className={styles.icons} />
              <SiChakraui className={styles.icons} />
            </div>
          </div>
          <div className={styles.projects_buttons}>
            <a href="https://github.com/Nileshmore13/Ideacart-Clone" target="_blank">
            <button>
              <p>Github</p> <AiFillGithub  />
            </button>
            </a>
            <a href="https://ideakart-clone.vercel.app/" target="_blank" >
            <button>
              <p>Live</p> <SiNetlify  />
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

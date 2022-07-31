import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";
import Boy from "../../img/boy.png";
import KaveenPic from "../../img/KaveenPic.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Web from "../../img/Web.png";
import Mob from "../../img/Mob.png";
import uiux from "../../img/uiux.png";
import earth from "../../img/earth.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <div>
            <span style={{ color: darkMode ? "white" : "" }}>Hello!</span>
            <img src={earth} alt="" />
          </div>
          <span>I'm Theshan Kaveen</span>
          <span>
            A hardworking and an ambitious undergraduate in Management and
            Information Technology, with a high commitment towards making new
            ideas happen, by developing innovative and creative software
            solutions, while being self-motivated to work in any working
            environment.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/theshan-kaveen-liyanaarachchi-02a40475/">
            <LinkedIn color="var(--orange)" size="5rem" />
          </a>

          <a href="https://twitter.com/TheshanKaveen">
            <Twitter color="var(--orange)" size="5rem" />
          </a>

          <a href="https://github.com/tkaveen">
            <Github color="var(--orange)" size="5rem" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={KaveenPic} alt="" />
        <img src={Vector3} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Web} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "5rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
          style={{ top: "18rem", left: "9.9rem" }}
        >
          <FloatingDiv image={Mob} txt1="Mobile" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "-20%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          style={{ left: "-4rem" }}
        >
          <FloatingDiv image={uiux} txt1="UI/UX" txt2="Developer" />
        </motion.div>
        {/* blurDivs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

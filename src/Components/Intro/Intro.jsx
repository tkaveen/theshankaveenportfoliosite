import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Intro.css";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import Twit from "../../img/Twit.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Web from "../../img/Web.png";
import Mob from "../../img/Mob.png";
import uiux from "../../img/uiux.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Theshan Kaveen</span>
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
        <img src={Boy} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Web} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={Mob} txt1="Mobile" txt2="Developer" />
        </div>
        <div style={{ left: "-4rem" }}>
          <FloatingDiv image={uiux} txt1="UI/UX" txt2="Developer" />
        </div>
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

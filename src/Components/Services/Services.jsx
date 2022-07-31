import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Services.css";
import Web from "../../img/Web.png";
import Mob from "../../img/Mob.png";
import uiux from "../../img/uiux.png";
import Card from "../Card/Card";
import CV from "./CV.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* leftSide */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Interested</span>
        <span>Working Areas</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
          <br />
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </span>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* rightSide */}
      <div className="cards">
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
          style={{ top: "2rem", left: "19rem" }}
        >
          <Card
            img={Web}
            heading={"Web Design"}
            detail={"React,HTML,CSS,Spring Boot,Angular"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "0" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}
          style={{ top: "15rem", left: "-2rem" }}
        >
          <Card img={Mob} heading={"Mobile Develpoment"} detail={"Flutter"} />
        </motion.div>
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "17.5rem" }}
          transition={transition}
          style={{ top: "23rem", left: "17.5rem" }}
        >
          <Card
            img={uiux}
            heading={"UI/UX Design"}
            detail={"Figma,inVision Studio,Adobe xd"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

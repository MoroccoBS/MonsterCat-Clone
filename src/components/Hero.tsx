import "./Hero.css";
import Image from "../assets/images/pexels.webp";
import { BsPlay } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="noise"></div>
        <div className="img-container">
          <h3>
            <span>Instinct</span> — Released May 22, 2020
          </h3>
          <img src={Image} alt="" />
        </div>
        <div className="titles-container">
          <h1>Level Days</h1>
          <h2>Conro</h2>
          <div className="btn-container">
            <motion.button
              whileHover={{
                backgroundColor: "white",
                color: "black",
              }}
            >
              {" "}
              <BsPlay />
              Listen Now
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "white",
                color: "black",
              }}
            >
              {" "}
              <HiOutlineShare /> Share
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

import "./NavBar.css";
import logo from "../assets/images/monstercat-logo.webp";
import { FiMenu } from "react-icons/fi";
import {
  BsInstagram,
  BsTwitter,
  BsTwitch,
  BsFacebook,
  BsDiscord,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
interface Props {
  Animate: () => void;
}

function NavBar({ Animate }: Props) {
  return (
    <>
      <div className="nav">
        <img src={logo} alt="logo" />
        <button className="btn" onClick={Animate}>
          <FiMenu stroke="#fdfdfd" />
        </button>
        <div className="socials">
          <a href="">
            <BsInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <BsTwitter fill="#fdfdfd" />
          </a>
          <a href="">
            <BsTwitch />
          </a>
          <a href="">
            <BsFacebook />
          </a>
          <a href="">
            <BsDiscord />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;

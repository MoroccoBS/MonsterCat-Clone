import "./SideBar.css";
import {
  BsInstagram,
  BsTwitter,
  BsTwitch,
  BsFacebook,
  BsDiscord,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import DropDownComponent from "./DropDownComponent";
interface SideBarProps {
  Animate: () => void;
  scope: React.RefObject<HTMLDivElement>;
}

function SideBar({ Animate, scope }: SideBarProps) {
  return (
    <>
      <div
        ref={scope}
        className="sidebar"
        style={{ transform: "translateX(500px) translateZ(0)" }}
      >
        <div className="sidebar-top">
          <a href="">
            <img
              src="https://cdn.monstercat.com/monstercat-logo-white.svg"
              alt=""
            />
          </a>
          <button className="btn btn-white" onClick={Animate}>
            <GrClose />
          </button>
        </div>
        <div className="element-cont">
          <DropDownComponent
            id={1}
            children="Music"
            childrenItems={["OurMusic", "INSTINCT", "Uncaged", "Silk"]}
          />
          <a href="">Artists</a>
          <DropDownComponent
            id={2}
            children="About"
            childrenItems={[
              "ABOUT MONSTERCAT",
              "DIVERSITY & INCLUSION",
              "CODE OF ETHICS",
              "ENVIRONMENTAL",
              "CONTACT US",
            ]}
          />
          <a href="">News</a>
          <DropDownComponent
            id={3}
            children="Events"
            childrenItems={["MONSTERCAT EVENTS EXPERIENCE", "UPCOMING EVENTS"]}
          />
          <DropDownComponent
            id={4}
            children="Programming"
            childrenItems={[
              "MonstercatTV",
              "CALL OF THE WILD",
              "SILK SHOWCASE",
              "UPCOMING SHOWS",
            ]}
          />
          <a href="">Gold</a>
          <a href="">Partners</a>
          <a href="">Press</a>
          <a href="">Player</a>
          <a href="">Shop</a>
          <a href="">Lost Civilization</a>
        </div>
        <div className="socials-side">
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
        <div className="sign">
          <a href="">Sing In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </>
  );
}

export default SideBar;

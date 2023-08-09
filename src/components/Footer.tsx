import { BsArrowRight } from "react-icons/bs";
import "../App.css";
import {
  BsInstagram,
  BsTwitter,
  BsTwitch,
  BsFacebook,
  BsDiscord,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer-cont">
        <div className="line line-top"></div>
        <div className="first-footer">
          <a href="">About Monstercat</a>
          <a href="">Contact us</a>
          <a href="">Careers</a>
          <a href="">News</a>
          <a href="">Peers</a>
        </div>
        <div className="second-footer">
          <a href="">Terms of service</a>
          <a href="">Privacy policy</a>
        </div>
        <div className="email">
          <h4>MONSTERCAT NEWS</h4>
          <p>
            Don't miss a thing, stay up to date with the latest news from us.
          </p>
          <form action="">
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">
              <BsArrowRight />
            </button>
          </form>
        </div>
        <div className="line line-bottom"></div>
      </div>
      <div className="footer-cont-2">
        <div className="upper-footer">
          <p>2011 - 2023 © Monstercat, All Rights Reserved</p>
          <div className="icons">
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
        <div className="lower-footer">
          <p>
            We acknowledge with gratitude the traditional, ancestral and unceded
            land of the Coast Salish peoples, including the territories of the
            Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
            (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
            Monstercat's Vancouver HQ stands.
          </p>
          <p>
            We acknowledge the unceded and ancestral territories of the
            Gabrielino/Tongva peoples on which our LA team live and work.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

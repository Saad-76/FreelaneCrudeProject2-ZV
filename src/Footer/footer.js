import React from "react";
import { FiLinkedin } from "react-icons/fi";
import piccir from '../Assets/ilv-circle.svg';
import { IoLogoGameControllerB } from "react-icons/io";
import { FiArrowDownRight } from "react-icons/fi";
import { FaYoutube, FaTwitter, FaFacebook, FaMediumM } from "react-icons/fa";
import "./footer.css"
import logopic from "../Assets/Blocktopia-BLACK.png";

const Footer = () => {
  return (
    <div
      class="footer2"
      style={{
        background: "linear-gradient(rgb(19, 10, 42) 0%, rgb(28, 11, 71) 100%)",
      }}
    >
      <div className="footer-nav col-md-12">
        <div className="img-top  col-md-4">
          <img src={logopic} height="50px" />
        </div>
        <div className="img-top2 col-md-4">
          
        </div>
        <div className="img-top1  col-md-4">
          <a href="#">
            <IoLogoGameControllerB size={30} />
          </a>
          <a href="#">
            <FaTwitter size={30} />
          </a>
          <a href="#">
            <FaFacebook size={30} />
          </a>
          <a href="#">
            <FaMediumM size={30} />
          </a>
          <a href="#">
            <FaYoutube size={30} />
          </a>
        </div>{" "}
      </div>
      <div class="footer1 col-md-12">
        <div class="social-logos col-md-2">
          <p></p>
          <p>
             Stacking
          </p>

          <p>
            Whitepaper
          </p>
          <p> 
            FAQs
          </p>
          <p>
            Careers
          </p>
        </div>
        <div class="home-1 col-md-2 ">
          <div className="home-1img"><img src={piccir} height='70px'></img></div>
         <div home-1text> <h5>ILV price</h5>
          <h4>$1124.96</h4>
          <p><FiArrowDownRight size={20} />-1.30%</p>
          
        </div>
        </div>
        <div class="contact-us col-md-4">
          <h6>Available on</h6>
          <div className="contact-us-text d-flex">
          <p to="00923214898395">Binance</p>
          <p to="00923214898395">1inch</p>
          <p to="00923214898395">Sushi</p>
          <p to="00923214898395">KuCoin</p>
          <p to="00923214898395">Okex</p>
          <p to="00923214898395">CoinSpot</p>
        </div>
        </div>
      </div>

      <div class="footer">
        <div class="footer-text">
          <p>
          Illuvium © 2021, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

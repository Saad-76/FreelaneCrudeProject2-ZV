import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <div className=" homePage_section__style">
        <h1>LOGO</h1>
        <h2>Fight for ETH.</h2>
        <p>
          <button className="button_sectionONE__style">
            Register
          </button>
          <div className="homepage_button__style">
          <Link to="https://www.youtube.com/watch?v=mzT88eN4gts">
            <button
              type="button"
             className="buttonTwo_section__style"
            >
              TRAILER
            </button>
          </Link>
          </div>
        </p>
      </div>
    </>
  );
};
export default HomePage;

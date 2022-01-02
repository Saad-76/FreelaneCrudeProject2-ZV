import React from "react";
import "./sectionTwo.css"
import CoverPageVideo from "../Assets/CoverPageVideo.webm"


const SectionTwo = () => {
  return (
    <>
      <div className="sectionTwo_section__style">
        <div >
          <h1>Welcome to Illuvium</h1>
          <p>
            An open-world RPG adventure game built on the Ethereum Blockchain.
            Journey across a vast and varied landscape on your quest to hunt and
            capture deity-like creatures called Illuvials. Discover the cause of
            the cataclysm that shattered this land.
          </p>
        </div>
        <div >
            <img src="https://www.illuvium.io/images/homepage-content/welcome-to-illuvium.webp" alt="sectiontwo"/>
        </div>
      </div>
      {/* <video
        className="video"
        width="100%"
        height="60%"
        loop={true}
        muted={true}
        autoPlay={true}
      >
        <source src={CoverPageVideo} type="Video/mp4" />
        <source src={CoverPageVideo} type="Video/webm" />

        <source src={CoverPageVideo} type="Video/ogg" />
        <source src={CoverPageVideo} type="Video/webkit" />{" "}
      </video> */}
    </>
  );
};
export default SectionTwo;

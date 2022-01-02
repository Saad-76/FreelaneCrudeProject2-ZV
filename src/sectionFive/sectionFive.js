import React from "react";
import "./sectionFive.css";

const SectionFive = () => {
  return (
    <div>
      <div className="sectionFive_outer__style">
        {/* <div className="container"> */}
          {" "}
          <div className=" sectionFive_section__style col-md-12 row ">
            <div className="col-md-6 row">
              <div className="sectionFive_content__style">
              <h2>Backed by the blockchain</h2>
              <p>
                Store your Illuvials on Shards. Sleek crystal slivers that hold
                the essence of the creature inside. Compare stats with your
                friends and flaunt your rare shiny, cosmic, and holo
                collectibles.
              </p>
              </div>
            </div>
            <div className="col-md-6 row">
              <img
                src="https://www.illuvium.io/images/homepage-content/backed-by-blockchain.webp"
                alt="sectionFiveImage"
                className="sectionFive_image__style"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default SectionFive;

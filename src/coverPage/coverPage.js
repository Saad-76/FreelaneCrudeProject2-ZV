import React from "react";
// import Bloktopiatrailer from "../Assets/Bloktopiatrailer.mp4";
import CoverPageVideo from "../Assets/Bloktopiatrailer.mp4";
import "./coverPage.css";
import { useHistory } from "react-router-dom";

const CoverPage = () => {
  const history = useHistory();

  const handleNextPage = () => {
    history.push("/home");
  };
  return (
    <>
      <video
        className="video_coverpage"
        src={CoverPageVideo}
        loop={true}
        muted={true}
        autoPlay={true}
      />

      <div className="content">
        <button className="coverPage_button__style" onClick={handleNextPage}>
          Click To Enter Website
        </button>
      </div>
    </>
  );
};
export default CoverPage;

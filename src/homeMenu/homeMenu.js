import React from "react";
import Footer from "../Footer/footer";
import HomePage from "../homePage/homePage";
import SectionEight from "../sectionEight/sectioneight";
import SectionFive from "../sectionFive/sectionFive";
import SectionFour from "../sectionFour/sectionFour";
import SectionSeven from "../sectionSeven/sectionSeven";
import SectionSix from "../sectionSix/sectionSix";
import SectionThree from "../sectionthree/sectionThree";
import SectionTwo from "../sectionTwo/sectionTwo";
import "./homeMenu.css"

const HomeMenu=()=>{
    return(
        <>
        <div className="homepage_background__style">
        <HomePage/>
        {/* <SectionTwo/> */}
        <SectionThree/>
        {/* <SectionFour/> */}
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
        {/* <SectionEight/> */}
        <Footer/>
        </div>
        </>
    );
}
export default HomeMenu;
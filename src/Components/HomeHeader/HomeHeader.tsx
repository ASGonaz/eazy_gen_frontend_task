import React from "react";
import { Link } from "react-router-dom";
import "./HomeHeader.css";
import MainImgInHeader from "./MainImgInHeader.png";
import { commonStyles } from "../../Helpers/StyleHelper";
interface Props {}

const HomeHeader = (props: Props) => {
  return (
    <section id="HomeHeader">
      <div className="container flex flex-col-reverse mx-auto pt-0 px-8 pb-8 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 lg:m-10 xl:m-20 lg:mt-4 lg:w-1/2 xl:mb-52" style={{marginTop: "4px"}}>
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
           AI-powered
e-learning creation tool for enterprises
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
           Transform your documents into engaging e-learning or create company-tailored courses from scratch in minutes. Made for subject-matter experts and L&D alike.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/user"
              className="py-5 px-10 text-2xl font-bold text-white rounded lg:py-4 hover:opacity-70"
              style={commonStyles.primaryButton}
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={MainImgInHeader} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;

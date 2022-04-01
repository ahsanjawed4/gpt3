import React from "react";
import "./brand.css";
import { google, atlassian, dropbox, shopify, slack } from "./import";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="gpt__brand-google">
        <img src={google} alt="google" />
      </div>
      <div className="gpt__brand-slack">
        <img src={slack} alt="slack" />
      </div>
      <div className="gpt__brand-atlassian">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="gpt__brand-dropbox">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="gpt__brand-shopify">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;

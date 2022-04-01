import React, { useState, useEffect } from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";
import { featured__data } from "./featured_data";
const Features = () => {
  let [featuresData, setFeaturesData] = useState(featured__data);
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item) => {
          return <Feature title={item.title} text={item.text} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Features;

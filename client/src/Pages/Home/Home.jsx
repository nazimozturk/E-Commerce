import React from "react";
import "./Home.scss";
import Slider from "../../Components/Slider/Slider";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts type="featured" />
      <FeatureProducts type="trending" />
    </div>
  );
};

export default Home;

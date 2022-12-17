import React from "react";
import "./Home.scss";
import Slider from "../../Components/Slider/Slider";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts type="featured" />
      <Categories />
      <FeatureProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;

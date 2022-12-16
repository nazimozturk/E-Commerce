import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies </span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            iste deleniti nisi officiis distinctio, at aliquid facilis vel, est
            dolorum molestias maxime delectus provident sunt obcaecati, nobis
            mollitia. Laborum, architecto.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            architecto optio quis facere neque itaque, numquam reiciendis, quas
            dolor delectus commodi explicabo quae enim? Explicabo.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Damastore</span>
          <span className="copyright">
            © Copyright 2022. All Rights Reseverd
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

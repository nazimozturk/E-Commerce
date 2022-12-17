import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://cdn.dsmcdn.com/ty451/product/media/images/20220611/0/124283681/497894144/1/1_org_zoom.jpg",
    "https://cdn.dsmcdn.com/ty452/product/media/images/20220611/0/124283681/497894144/2/2_org_zoom.jpg",
  ];
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Title</h1>
          <span className="price">1500₺</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repellat quod? Atque id rerum quisquam ipsum hic accusamus voluptate
            modi! Quaerat assumenda, ipsum beatae ducimus consequatur veritatis
            voluptatem enim iusto repellendus architecto? Perspiciatis quos ex
            expedita ab, ratione cumque aliquam reprehenderit natus?
          </p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

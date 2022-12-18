import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./FeatureProducts.scss";
import axios from "axios";

const FeatureProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <div className="featureProducts">
        <div className="top">
          <h1>{type} Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            adipisci cum, iure libero quidem inventore eveniet quod,
            consequuntur sapiente mollitia qui quas repellat quasi placeat nihil
            ipsam distinctio voluptatum. Excepturi necessitatibus nemo
            voluptatem ratione. Delectus sapiente dolorum, odio numquam ratione
            magnam ipsam cupiditate sed architecto laudantium recusandae labore
            consequatur eveniet officiis maiores amet dolorem.
          </p>
        </div>
        <div className="bottom">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;

import React from "react";
import Card from "../Card/Card";
import "./FeatureProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeatureProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
          {error
            ? "Someting went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;

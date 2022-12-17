import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8218379/pexels-photo-8218379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/8218381/pexels-photo-8218381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 35,
      price: 30,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Kol Saati",
      isNew: false,
      oldPrice: 42,
      price: 15,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1928078/pexels-photo-1928078.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Kapüşonlu Sweatshirt",
      isNew: false,
      oldPrice: 10,
      price: 32,
    },
  ];

  return (
    <>
      <div className="list">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default List;

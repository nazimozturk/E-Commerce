import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      isNew: true,
      oldPrice: 35,
      price: 30,
    },
  ];
  return (
    <>
      <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p> {item.desc?.substring(0, 100)} </p>
              <div className="price">1 x ₺{item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>₺123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
      </div>
    </>
  );
};

export default Cart;

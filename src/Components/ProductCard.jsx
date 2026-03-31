import { useState } from "react";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [clicked, setClicked] = useState(false);

  const itemInCart = cart.find((item) => item.id === product.id);

  const handleAdd = ()=> {
    addToCart(product);
    setClicked(true);
    setTimeout(() => setClicked(false), 1200);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="cardBox">

      {product.badge && <span className="tag">{product.badge}</span>}

      
      <img
        src={product.image}
        alt={product.name}
        className="cardImg"
      />

      <div className="cardInfo">
        <p className="catText">{product.category}</p>
        <h3 className="name">{product.name}</h3>
        <p className="desc">{product.description}</p>

        <div className="bottomRow">
          <span className="price">{formatPrice(product.price)}</span>

          <button
            className={`cartBtn ${clicked ? "done" : ""}`}
            onClick={handleAdd}
          >
            {clicked
              ? "Added"
              : itemInCart
              ? `In Cart (${itemInCart.quantity})`
              : "Add"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartItem from "../Components/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
const saveCart = () => {
  localStorage.setItem("myCart", JSON.stringify(cart));
  alert("Cart saved!");
};
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const shipping = cartTotal > 0 ? (cartTotal > 50000 ? 0 : 499) : 0;
  const tax = Math.round(cartTotal * 0.18);
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="cartPage">
        <h1 className="title">Shopping Cart</h1>

        <div className="emptyBox">
          <div className="emoji">🧺</div>
          <h2>Cart is empty</h2>
          <p>Add some products to get started</p>

          <Link to="/products" className="shopBtn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cartPage">

      <div className="topBar">
        <h1 className="title">Shopping Cart</h1>


        <div className="sequent">
        <button className="clearBtn" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="saveBtn" onClick={saveCart}>
         Save Cart
         </button>
         </div>
   

      </div>
         
       
        
      <div className="cartContent">

        <div className="leftSide">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              formatPrice={formatPrice}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <div className="rightSide">
          <h2>Order Details</h2>

          <div className="priceRow">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>

          <div className="priceRow">
            <span>Shipping</span>
            <span className={shipping === 0 ? "freeText" : ""}>
              {shipping === 0 ? "FREE" : formatPrice(shipping)}
            </span>
          </div>

          <div className="priceRow">
            <span>GST (18%)</span>
            <span>{formatPrice(tax)}</span>
          </div>

          {shipping === 0 ? (
            <p className="note">🎉 Free shipping applied</p>
          ) : (
            <p className="note">
              Add {formatPrice(50000 - cartTotal)} more for free shipping
            </p>
          )}

          <div className="totalRow">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <button className="checkoutBtn">Checkout</button>

          <Link to="/products" className="backLink">
            ← Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Cart;
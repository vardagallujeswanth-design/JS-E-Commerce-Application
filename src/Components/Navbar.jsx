import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

return (
  <nav className="navbar">
    <div className="navbar-inner">

   
      <Link to="/" className="navbar-logo">
        <span className="logo-icon"> 😊 </span>
        <span className="logo-text"> JS </span>
      </Link>

   
      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${isActive("/") ? "active" : ""}`}
        >
          Home
        </Link>

        <Link
          to="/products"
          className={`nav-link ${isActive("/products") ? "active" : ""}`}
        >
          Products
        </Link>
      </div>

      <Link to="/cart" className="cart-link">
        <span className="cart-icon"> 🧺 </span>
        <span className="cart-label"> Cart </span>
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </Link>
       
    </div>
  </nav>
);
};

export default Navbar;

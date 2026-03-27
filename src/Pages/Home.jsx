import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      
      <div className="topSection">
        <div className="textArea">
          
          <h4 className="smallText">
            Curated collection of premium devices & engineered for those who
            demand excellence in every interaction.
          </h4>

          <h1 className="mainTitle">Premium Tech Store</h1>

          <div className="buttonGroup">
            <Link to="/products" className="shopBtn">
              Browse Products
            </Link>

            <Link to="/cart" className="cartBtn">
              View Cart
            </Link>
          </div>
        </div>

        <div className="rightSide">
          <div className="boxList">
            <div className="box">💻 Laptops</div>
            <div className="box">📱 Smartphones</div>
            <div className="box">🎧 Headphones</div>
            <div className="box">⌚ Watches</div>
          </div>
        </div>
      </div>

      <div className="infoRow">
        <div className="infoItem">
          <span>🚚</span>
          <p>Free Shipping</p>
        </div>

        <div className="infoItem">
          <span>🔄</span>
          <p>7-Day Returns</p>
        </div>

        <div className="infoItem">
          <span>🔒</span>
          <p>Secure Checkout</p>
        </div>

        <div className="infoItem">
          <span>👌</span>
          <p>Premium Quality</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
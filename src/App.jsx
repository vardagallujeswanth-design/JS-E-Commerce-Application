import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Product";
import Cart from "./Pages/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>😊 JS ". Unveil the Exceptional ."</p>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

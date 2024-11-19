import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import ProductDetail from "./pages/ProductDetail";
import Checkout from './pages/Checkout';
import Footer from "./components/Footer";

const App = () => {
    const [inCart, updateCart] = useState([]);


    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home updateCart={updateCart} />} />
                <Route
                    path="/cart"
                    element={<Cart inCart={inCart} updateCart={updateCart} />}
                />
                <Route
                    path="/product/:id"
                    element={<ProductDetail />}
                />
                <Route path="/checkout" element={<Checkout inCart={inCart} />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

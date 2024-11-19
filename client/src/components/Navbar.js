import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="font-extrabold bg-cyan-800 text-white items-center flex justify-between px-4 py-3 mb-2"   >
                <Link to="/">MINIMA</Link>
                <div className="text-xs ">
                    <Link className="mr-2 " to="/">Home</Link>
                    <Link className="" to="/cart">Cart</Link>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;

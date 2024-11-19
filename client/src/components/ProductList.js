import React, { } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products, updateCart }) => {

    const navigate = useNavigate();
    return (
        <div className=" pb-8 pt-2 grid  grid-cols-[auto_auto_auto_auto] gap-2 " >
            {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    onClick={() => {
                        navigate(`/product/${product.id}`);
                    }}
                    updateCart={updateCart}
                />
            ))}
        </div >
    );
};

export default ProductList;

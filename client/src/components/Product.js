import React from "react";
import { useLocation } from "react-router-dom";

const Product = ({ product, updateCart, onClick }) => {
    const location = useLocation();

    const toCart = (e) => {
        e.stopPropagation();
        updateCart((prvPrds) => {
            if (prvPrds.filter((prd) => product.id === prd.id).length > 0) {
                return prvPrds.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prvPrds, { ...product, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = () => {
        updateCart((prvPrds) =>
            prvPrds.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = () => {
        if (product.quantity === 1)
            updateCart((prvPrds) => prvPrds.filter((item) => item.id !== product.id));
        else
            updateCart((prvPrds) =>
                prvPrds.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
    };

    return (
        <>
            <div
                className="product-card flex-col flex justify-between rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                onClick={onClick}
                style={{
                    cursor: location.pathname === "/" ? "pointer" : "default",
                    backgroundColor: "#fff",
                }}
            >
                <img
                    className="rounded-lg object-cover mx-auto mb-3"
                    src={`${product.image}`}
                    alt={product.name}
                    width={110}
                    height={110}
                />
                <div className="text-center">
                    <h5 className="font-semibold text-gray-800 text-sm">
                        {product.title}
                    </h5>
                    <p className="text-[orangered] text-sm font-medium mt-1">
                        {product.price}$
                    </p>

                    {location.pathname === "/" && (
                        <button
                            className="add-to-cart-btn border border-solid text-white bg-darkcyan bg-cyan-700
                            rounded-md text-xs px-3 py-1 mt-2 transition-colors hover:bg-cyan-600 active:scale-[0.98]"
                            onClick={(e) => toCart(e)}
                        >
                            Add to Cart
                        </button>
                    )}

                    {location.pathname === "/cart" && product.quantity > 0 && (
                        <div className="quantity-controls flex items-center justify-center gap-2 mt-3">
                            <button
                                className="border active:scale-[0.98] border-gray-300 px-2 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
                                onClick={() => decreaseQuantity()}
                            >
                                -
                            </button>
                            <span className="font-medium">{product.quantity}</span>
                            <button
                                className="border active:scale-[0.98] border-gray-300 px-2 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
                                onClick={() => increaseQuantity()}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Product;

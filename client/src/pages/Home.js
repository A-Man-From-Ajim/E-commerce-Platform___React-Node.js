import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";

const Home = ({ updateCart }) => {
    const [filter, setFilter] = useState({ title: '' })
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredproducts] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await fetch(
                //     `${process.env.REACT_APP_API_URL}/api/products`
                // );
                // const data = await response.json();
                // setProducts(data);
                // setFilteredproducts(data);
                const response = await fetch(
                    `https://fakestoreapi.com/products`
                );
                const data = await response.json();
                setProducts(data);
                setFilteredproducts(data);

            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        setFilteredproducts((prevState) => products.filter(ele =>
            ele.title.toLowerCase().includes(filter.title.toLowerCase())))
    }, [filter])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="px-2 py-2">
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <h1 className="font-bold text-xl text-cyan-700">Welcome to our Store</h1>
                <p>Find the best products at unbeatable prices!</p>
                <Filter setFilter={setFilter}></Filter>
            </div>
            <ProductList products={filteredProducts} updateCart={updateCart} />
        </div>
    );

};

export default Home;

export const dummy = [
    {
        "id": 1,
        "name": "Men's T-Shirt",
        "price": "19.99",
        "description": "A comfortable cotton t-shirt available in various colors.",
        "image": "shirt_men.avif\n",
        "gender": "men"
    },
    {
        "id": 3,
        "name": "Men's Jeans",
        "price": "49.99",
        "description": "Classic denim jeans that fit perfectly.",
        "image": "jeans.jpg",
        "gender": "men"
    },
    {
        "id": 2,
        "name": "Women's Hoodie",
        "price": "39.99",
        "description": "A stylish hoodie perfect for casual outings.",
        "image": "hoodie.jpg\n",
        "gender": "women"
    },
    {
        "id": 4,
        "name": "Women's Dress",
        "price": "59.99",
        "description": "An elegant dress suitable for parties and events.",
        "image": "dress.jpg",
        "gender": "women"
    },
    {
        "id": 7,
        "name": "Men's Jacket",
        "price": "79.99",
        "description": "A warm jacket for winter days.",
        "image": "jacket.jpg",
        "gender": "men"
    },
    {
        "id": 8,
        "name": "Men's Leather Boots",
        "price": "89.99",
        "description": "Durable leather boots for all terrains.",
        "image": "leather_boots.jpg",
        "gender": "men"
    },
    {
        "id": 9,
        "name": "Men's Classic Watch",
        "price": "199.99",
        "description": "Timeless design with a stainless steel strap.",
        "image": "classic_watch.jpg",
        "gender": "men"
    },
    {
        "id": 11,
        "name": "Women's Handbag",
        "price": "59.99",
        "description": "Elegant and spacious handbag for daily use.",
        "image": "handbag.jpg",
        "gender": "women"
    },
    {
        "id": 12,
        "name": "Women's Winter Coat",
        "price": "99.99",
        "description": "Stylish and warm coat for cold weather.",
        "image": "winter_coat.jpg",
        "gender": "women"
    },
    {
        "id": 13,
        "name": "Women's Sneakers",
        "price": "49.99",
        "description": "Comfortable and trendy sneakers for everyday wear.",
        "image": "sneakers.jpg",
        "gender": "women"
    }
]
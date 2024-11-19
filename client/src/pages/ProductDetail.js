import { useParams } from "react-router-dom";
import { Stack } from 'react-bootstrap';
import { useEffect, useState } from "react";
export default function ProductDetail() {
    const { id } = useParams();


    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // const response = await fetch(
                //     `${process.env.REACT_APP_API_URL}/api/products/${id}`
                // );
                // const data = await response.json();
                // setProduct(data);
                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                );
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false)
            }
        };
        fetchProduct();
    })

    if (loading) return <h1>...Loading</h1>

    return <>
        <Stack direction='horizontal' gap={2}>
            <div className="p-2 flex justify-center" >
                <img src={`${product.image}`} alt="" height={5} width={100} />
            </div>
            <div className="p-2">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </div>

            <div className="p-2">
            </div>

        </Stack>
    </>;
}

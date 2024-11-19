import React from 'react';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

const Cart = ({ inCart, updateCart }) => {
    const products = inCart.map(product => {
        return <Product key={product.id} updateCart={updateCart} product={product} />
    })
    const navigate = useNavigate();
    return (
        <>
            <div className='my-2 pb-8 px-2' >

                <h1 className='font-bold text-center underline'>Cart</h1>
                <div className='mb-1 grid grid-cols-3 gap-2' >{products}</div>
                <div className="text-center w-full">

                    <p className='inline mr-1'>Click on Checkout if you wish to proceed</p>
                    <button className='bg-red-600  text-white text-xs font-normal py-1 px-2 rounded-md active:scale-95' onClick={() => navigate('/checkout')}>Checkout</button>
                </div>
            </div>
        </>
    );
};

export default Cart;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const price = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase'>
                <h3 className='text-3xl'>Total items {cart.length}</h3>
                <h3 className='text-3xl'>Total price {price}</h3>
                <button className='btn btn-warning btn-sm'>Pay</button>
                <h2></h2>
            </div>
        </div>
    );
};

export default MyCart;
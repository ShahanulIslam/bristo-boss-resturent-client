import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitle heading="Payment" subHeading="Please Process"></SectionTitle>
            <Elements stripe={stripePromise}>
                <PaymentForm cart={cart} price={price}></PaymentForm>
            </Elements>

        </div>
    );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import UseAuth from '../../../hooks/UseAuth';

const PaymentForm = ({ price }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const {user} = UseAuth()
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        // console.log("card", card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("Error", error);
            setCardError(error.message)
        }
        else {
            setCardError("")
            console.log("Payment Method", paymentMethod);
        }

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "Unknown", 
                        name: user?.displayName || "Anonymous", 
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        console.log(paymentIntent);
        
    }

    return (
        <div className='w-2/3 mx-8'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
        </div>
    );
};

export default PaymentForm;
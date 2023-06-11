import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { FaStripe } from "react-icons/fa";

const CheckoutFrom = ({ price, id, selectedClassId }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { user } = useAuth();
    // console.log(user?.email)

    useEffect(() => {

        axios.post('http://localhost:5000/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data);
                setClientSecret(res.data.clientSecret);
            })

    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // console.log(card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log(paymentIntent);
        setProcessing(false);

        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                id: id,
                classId: selectedClassId,
                
            }

            axios.post('http://localhost:5000/payments', payment)
            .then(res => {
                const posted = res.data;
                console.log(posted);
                if(posted.classesUpdateResult.modifiedCount && posted.insertResult.insertedId && posted.selectedClassUpdateResult.modifiedCount){
                    toast.success('Payment successful', {
                        duration: 1500,
                        position: "top-right",
                        icon: <FaStripe className="text-semibold text-lg w-10 text-orange-700 h-10"></FaStripe>,
                        style: {
                            background: '#E3F4F4',
                            fontWeight: '700'
                        },
                    });
                }
                
            })

            // axiosSecure.post('/payments', payment)
            // .then(res => {
            //     console.log(res.data);
            //     if(res.data.inserResult.insertedId){
            //         // dd
            //     }
            // })
    }

    }

    return (
        <>
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
                <div className="divider"></div>
                <button disabled={!stripe || !clientSecret || processing} className="btn btn-primary" type="submit">
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutFrom;
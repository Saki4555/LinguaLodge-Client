import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {

    const data = useLoaderData();
    console.log(data);

    const { price, _id, selectedClassId } = data;

    console.log(price, _id, selectedClassId);

   

    return (
        <div className="w-3/4 mx-auto pt-28 font-kanit">

            <Elements stripe={stripePromise}>
                <CheckoutFrom price={price} id={_id} selectedClassId={selectedClassId}></CheckoutFrom>
            </Elements>

        </div>
    );
};

export default Payment;
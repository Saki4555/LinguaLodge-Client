import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { useLocation } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get("price");
    const id = queryParams.get("id");
    const selectedClassId = queryParams.get("selectedClassId");
    // console.log(selectedClassId)
    // console.log(id);
    // console.log(price);

    return (
        <div className="w-3/4 mx-auto pt-28 font-kanit">

            <Elements stripe={stripePromise}>
                <CheckoutFrom price={price} id={id} selectedClassId={selectedClassId}></CheckoutFrom>
            </Elements>

        </div>
    );
};

export default Payment;
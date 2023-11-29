// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { Elements } from "@stripe/react-stripe-js";

// todo
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="max-w-5xl mx-auto bg-slate-50 border rounded-lg m-5 p-5 ">
      <h2 className="text-2xl font-semibold text-dark-03 py-2 text-center">
        Get Pro User
      </h2>
      <div className="divider">Payment Naw</div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

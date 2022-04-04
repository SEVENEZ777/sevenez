
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";


import React from 'react'

const PaypalCheckoutButton = (props) => {
    const {product} = props;
    
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderID) => {
        setPaidFor(true);
    }

    if(paidFor){
        alert("thank you for purchasing from 7EZ");
    }

    if(error){
        alert(error);
    }

  return (
    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, currency:"EUR"}}>
        <PayPalButtons
        
            onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false;
                if(hasAlreadyBoughtCourse){
                    setError("You already bought this ticket");
                    return actions.reject();
                } else {
                    return actions.resolve();
                }
            }}
        
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {   
                            description: product.description,
                            amount: {
                                value: product.price,
                            },
                        },
                    ],
                });
            }}
            onApprove = { async (data,action) => {
                const order = await action.order.capture();
                console.log("order", order);

                handleApprove(data.orderID);
            }}
            onCancel={() => {}}
            onError={(err) => {
                setError(err);
                console.log("PayPal Checkout onError", err)
            }}  
        />
    </PayPalScriptProvider>
  )
}


export default PaypalCheckoutButton;


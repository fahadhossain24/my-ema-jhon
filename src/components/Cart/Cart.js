import React from 'react';
import './Cart.css'

const Cart = ({cart, children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        // quantity = product.quantity
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    

    return (
        <div className='cart'>
            <h2>Order samary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total price: {total }</p>
            <p>Total Shipping: {shipping }</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {(total + shipping + tax).toFixed(2)}</h4>
            {children}
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css'

const Cart = props => {
    const { cart } = props;
    const total = cart.reduce((previous, expert) => previous + expert.salary, 0);
    const img = cart.map(expert => expert.name)
    return (
        <div classNameName="cart-bg">
            <h4>Expert Added: {cart.length}</h4>
            <h4>Total Cost: {total}</h4>
            <p>{img}</p>
        </div>
    );
};

export default Cart;
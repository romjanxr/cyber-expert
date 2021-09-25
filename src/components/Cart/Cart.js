import React from 'react';
import CartElement from '../CartElement/CartElement';
import './Cart.css'

const Cart = props => {
    const { cart } = props;
    const total = cart.reduce((previous, expert) => previous + expert.salary, 0);
    const addedExpert = cart.map(expert => {
        return (
            <CartElement expert={expert}></CartElement>
        )
    })
    return (
        <div className="cart-bg card">
            <h4>Expert Added: {cart.length}</h4>
            <h4>Total Cost: {total}</h4>
            <div>{addedExpert}</div>
            {
                !cart.length || <button className="btn btn-primary">Confirm List</button>
            }
        </div>
    );
};

export default Cart;
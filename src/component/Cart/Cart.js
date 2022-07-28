import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        const price = course.price;
        const coursePrice = parseFloat(price);
        total = total + coursePrice;      
    }

    let discount = 0;
    if (total > 0) {
        discount = total / 5;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Course Ordered: {cart.length}</p>
            <p>Course Price: ${formatNumber(total)}</p>
            <p>20% Discount: ${formatNumber(discount)}</p>
            <p>Total Price: ${formatNumber(total - discount)}</p>
        </div>
    );
};

export default Cart;
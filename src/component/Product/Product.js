import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, summery, price} = props.course;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='course-body'>
                <h3>{name}</h3>
                <p><small>{summery}</small></p>
                <h4>${price}</h4>
                <button onClick={()=> props.handleAddCourse(props.course)}>Enroll now</button>
            </div>
        </div>
    );
};

export default Product;
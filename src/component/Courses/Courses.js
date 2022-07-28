import React, { useState } from 'react';
import './Courses.css'
import courseData from '../../courseData/courseData.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Courses = () => {
    const data = courseData; 
    const [courses, setCourses] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course)=> {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div  className='courses'>
            <div className='courses-container'>
                {
                    courses.map(crs => <Product handleAddCourse ={handleAddCourse} key ={crs.key} course = {crs}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;
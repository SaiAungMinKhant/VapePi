import React from 'react'
import './Products.scss'
import ControlledCarousel from '../Carousel/Carousel';

function Products() {
    return (
        <div className='products'>
            <div className='newrelease'>
                <h1><span style={{"color":"red"}}>New</span> Released</h1>
                <p>Try Our Latest Flavors Here</p>
                <ControlledCarousel />
            </div>
            
        </div>
    )
}

export default Products;

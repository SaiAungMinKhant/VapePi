import React, { useState } from 'react';
import Card from '../Card/Card';
import './Slider.scss';
import {BiRightArrowAlt} from 'react-icons/bi'
import v1 from '../../assets/v1.png';
import v2 from '../../assets/v2.png';
import v3 from '../../assets/v3.png';
import v4 from '../../assets/v4.png';
import v5 from '../../assets/v5.png';
import v6 from '../../assets/v6.png';
import v7 from '../../assets/v7.png';
import v8 from '../../assets/v8.png';
import v9 from '../../assets/v9.png';
import v10 from '../../assets/v10.png';

const Slider = () => {
  const products = [
    { img: v1, name: "Refresher Mint", price: "30000 MMK", point: "600" },
    { img: v2, name: "Product 2", price: "20000 MMK", point: "400" },
    { img: v3, name: "Product 3", price: "15000 MMK", point: "300" },
    { img: v4, name: "Product 4", price: "25000 MMK", point: "500" },
    { img: v5, name: "Product 5", price: "18000 MMK", point: "360" },
    { img: v6, name: "Product 6", price: "22000 MMK", point: "440" },
    { img: v7, name: "Product 7", price: "32000 MMK", point: "640" },
    { img: v8, name: "Product 8", price: "28000 MMK", point: "560" },
    { img: v9, name: "Product 9", price: "19000 MMK", point: "380" },
    { img: v10, name: "Product 10", price: "27000 MMK", point: "540" }
  ];

  const [position, setPosition] = useState(0);
  const slideWidth = 300; // Adjust the width of each product item
  const slidesToShow = Math.floor(window.innerWidth / slideWidth);
  const slidesToScroll = 1;
  const totalSlides = products.length;
  const clonedSlides = [...products, ...products];

  const handleNextSlide = () => {
    const newPosition = position - slideWidth * slidesToScroll;

    if (Math.abs(newPosition) > slideWidth * totalSlides) {
      setPosition(0);
    } else {
      setPosition(newPosition);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(${position}px)`, width: `${slideWidth * (totalSlides + slidesToShow)}px` }}>
        {clonedSlides.map((product, index) => (
          <div className="slider-item" key={index}>
            <Card img={product.img} name={product.name} price={product.price} point={product.point} />
          </div>
        ))}
      </div>
      <button className="next" onClick={handleNextSlide}><BiRightArrowAlt /></button>
    </div>
  );
};

export default Slider;

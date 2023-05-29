import React from 'react';
import './Products.scss';
import ControlledCarousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import v9 from '../../assets/v9.png';
import v10 from '../../assets/v10.png';
import v11 from '../../assets/v11.png';
import v12 from '../../assets/v12.png';
import Slider from '../Slider/Slider';

function Products() {
  const newproduct = [
    { img: v9, name: "Refresher Mint", price: "30000 MMK", point: "600" },
    { img: v10, name: "Refresher Mint", price: "30000 MMK", point: "600" },
    { img: v11, name: "Refresher Mint", price: "30000 MMK", point: "600" },
    { img: v12, name: "Refresher Mint", price: "30000 MMK", point: "600" }
  ];

  return (
    <div className='products'>
      <div className='newrelease'>
        <h1><span style={{ color: "red" }}>New</span> Released</h1>
        <p>Try Our Latest Flavors Here</p>
        <div className="newproduct">
          {newproduct.map((product, index) => (
            <div key={index}>
              <Card img={product.img} name={product.name} price={product.price} point={product.point} />
            </div>
          ))}
        </div>
      </div>
      <ControlledCarousel />

      <div className='more'>
        <div className='left'>
          <img src={v9} alt='#' />
          <div className='info'>
            <h2>Devices</h2>
            <p>Find the best for<br/>you here!</p>
          </div>
        </div>
          <Slider />
      </div>

      <div className='more'>
        <div className='left'>
          <img src={v10} alt='#' />
          <div className='info'>
            <h2>Pods</h2>
            <p>Variety of choices<br/>available</p>
          </div>
        </div>
          <Slider />
      </div>

      <div className='more'>
        <div className='left'>
          <img src={v11} alt='#' />
          <div className='info'>
            <h2>Disposable</h2>
            <p>Easy, clean &<br/>superb flavor</p>
          </div>
        </div>
          <Slider />
      </div>

    </div>
  );
}

export default Products;

import React from 'react';
import './Products.scss';
import ControlledCarousel from '../Carousel/Carousel';
import v9 from '../../assets/v9.png';
import v10 from '../../assets/v10.png';
import v11 from '../../assets/v11.png';
import v12 from '../../assets/v12.png';
import Slider from '../Slider/Slider';

function Products() {

  return (
    <div className='products'>
      <div className='newrelease'>
        <h1><span style={{ color: "red" }}>New</span> Released</h1>
        <p>Try Our Latest Flavors Here</p>
        <div className="newproduct">
          <div className='new-card one'>
              <div className='flavor'>
                <p>Citrus Mon<br/>20,000 Pul<br/>Disposable<br/>3 percent<br/>30,000 MMK</p>
              </div>
              <div className='img'>
                <img src={v9} alt='#' />
              </div>
          </div>
          <div className='new-card two'>
              <div className='flavor'>
                <p>Strawberry<br/>Yogurt with<br/>Refreshing flavor<br/>Nic 3 percent<br/>30,000 MMK</p>
              </div>
              <div className='img'>
                <img src={v10} alt='#' />
              </div>
          </div>
          <div className='new-card three'>
              <div className='flavor'>
              <p>Strawberry<br/>Yogurt with<br/>Refreshing flavor<br/>Nic 3 percent<br/>30,000 MMK</p>
              </div>
              <div className='img'>
                <img src={v11} alt='#' />
              </div>
          </div>
          <div className='new-card four'>
              <div className='flavor'>
              <p>Strawberry<br/>Yogurt with<br/>Refreshing flavor<br/>Nic 3 percent<br/>30,000 MMK</p>
              </div>
              <div className='img'>
                <img src={v12} alt='#' />
              </div>
          </div>
        </div>
        <button>View More</button>
      </div>
      
      <ControlledCarousel className="hide" />

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

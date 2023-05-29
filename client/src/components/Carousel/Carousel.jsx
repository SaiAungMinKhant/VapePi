import React, { useState } from 'react';
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import './Carousel.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Carousel() {
  const [current, setCurrent] = useState(0);
  const images = [bg1, bg2, bg3];
  const imageSlides = document.getElementsByClassName("slide-image");
  const bubbles = document.getElementsByClassName("bubble-outer");

  const nextImage = () => {
    let newIndex = current === images.length - 1 ? 0 : current + 1;
    imageSlides[current].className = "slide-image leftOut";
    imageSlides[newIndex].className = "slide-image leftIn";
    updateBubbles(newIndex);
    setCurrent(newIndex);
  };

  const jumpImage = (e) => {
    let jumpIndex = parseInt(e.target.id);
    if (jumpIndex === current) return;
    if (jumpIndex - current >= 0) {
      imageSlides[current].className = "slide-image leftOut";
      imageSlides[jumpIndex].className = "slide-image leftIn";
    } else {
      imageSlides[current].className = "slide-image rightOut";
      imageSlides[jumpIndex].className = "slide-image rightIn";
    }
    updateBubbles(jumpIndex);
    setCurrent(jumpIndex);
  };

  const updateBubbles = (highlight) => {
    bubbles[current].style.borderColor = "black";
    bubbles[highlight].style.borderColor = "white";
  };

  return (
    <div className="container">
      <button className="button-next" onClick={nextImage}><AiOutlineArrowRight /></button>
      <div className="track">
        {images.map((image, index) => (
          <div
            className="slide-image"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              transform: index === 0 ? "translateX(0%)" : "translateX(100%)",
            }}>
            <div className='newflavor'>
              <h1>Try New Flavor</h1>
              <span>Citrus Moster</span><br/>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        {images.map((image, index) => (
          <div className="bubble-outer" onClick={jumpImage} id={index} key={index}>
            <div className="bubble-inner" id={index}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

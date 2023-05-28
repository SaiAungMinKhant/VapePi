import { useRef, useState } from 'react';
import {ArrowBackIosOutlined,ArrowForwardIosOutlined} from '@mui/icons-material';
import Card from '../Card/Card'
import './Slider.scss';
import v1 from '../../assets/v1.png'
import v2 from '../../assets/v2.png'
import v3 from '../../assets/v3.png'
import v4 from '../../assets/v4.png'
import v5 from '../../assets/v5.png'
import v6 from '../../assets/v6.png'
import v7 from '../../assets/v7.png'
import v8 from '../../assets/v8.png'
import v9 from '../../assets/v9.png'
import v10 from '../../assets/v10.png'

function Slider() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const [offset, setOffset] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      setOffset((currentOffset) => {
        const newOffset = currentOffset + 350;
        console.log(newOffset);
        return newOffset;
      });
      listRef.current.style.transform = `translateX(${350 + offset}px)`; // distance
    }

    if (direction === 'right' && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      setOffset((currentOffset) => {
        const newOffset = currentOffset - 350;
        console.log(newOffset);
        return newOffset;
      });
      listRef.current.style.transform = `translateX(${-350 + offset}px)`; // distance
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className="container" ref={listRef}>
          <Card index={0} img={v1} name="" price="30000 MMK" point="600" />
          <Card index={1} img={v2} name="" price="30000 MMK" point="600"/>
          <Card index={2} img={v3} name="" price="30000 MMK" point="600"/>
          <Card index={3} img={v4} name="" price="30000 MMK" point="600"/>
          <Card index={4} img={v5} name="" price="30000 MMK" point="600"/>
          <Card index={5} img={v6} name="" price="30000 MMK" point="600"/>
          <Card index={6} img={v7} name="" price="30000 MMK" point="600"/>
          <Card index={7} img={v8} name="" price="30000 MMK" point="600"/>
          <Card index={8} img={v9} name="" price="30000 MMK" point="600"/>
          <Card index={9} img={v10} name="" price="30000 MMK" point="600"/>
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

export default Slider
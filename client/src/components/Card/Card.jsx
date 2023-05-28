import React from 'react'
import './Card.scss'
import {BsStarFill} from 'react-icons/bs'

const  Card = (props) =>{
      return (
        <div className='card'>
            <div className='img'>
              <img src={props.img} alt='#' />
            </div>
            <div className='detail'>
              <h4>{props.name}</h4>
              <p>{props.price}</p>
              <span className='discount'>{props.discount}</span><br />
              <span className='point'><BsStarFill style={{"font-size":"0.9em","padding":"8px 5px 0 0 "}} />{props.point} points</span>
            </div>
        </div>
    )
}

export default Card;
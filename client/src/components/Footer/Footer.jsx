import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import './Footer.scss'
import qrcode from '../../assets/qrcode.png'
import kpay from '../../assets/kpay.png'
import wave from '../../assets/wave.png'
import fb from '../../assets/facebook.png'
import insta from '../../assets/instagram.jpg'
import twitter from '../../assets/twitter.png'
import viber from '../../assets/viber.jpg'
import tele from '../../assets/telegram.jpg'

function Footer() {
  return (
    <div className='footer'>

      <div className='top-footer'>
        <div className='customer-care'>
          <h4>Customer Service</h4>
          <ul>
            <li><a href='terms'>Terms & Privacy Policy</a></li>
            <li><a href='return'>Return Policy</a></li>
          </ul>
        </div>
        <div className='lang'>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Language</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="english"
              name="radio-buttons-group"
            >
              <FormControlLabel value="unicode" control={<Radio />} label="Myanmar(Unicode)" />
              <FormControlLabel value="zawgyi" control={<Radio />} label="Myanmar(Zawgyi)" />
              <FormControlLabel value="english" control={<Radio />} label="English" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='contact'>
          <h4>Contact Us</h4>
          <ul>
            <li>Lay Daunt Kan Main Road, Cashmere<br/>Stop, Near Zawana, Thingangyun Tsp,Yangon.</li>
            <li>09-89688666</li>
          </ul>
        </div>
        <div className='qrcode'>
          <h4>Download Our App</h4>
          <div className='qr-img'>
            <img src={qrcode} alt='#' />
          </div>
        </div>
      </div>

      <div className='middle-footer'>
        <div className='payment'>
          <h4>Payment</h4>
          <div className='imgs'>
            <a href='kpay'><img src={kpay} alt='kpay' /></a>
            <a href='wave'><img src={wave} alt='wave' /></a>
          </div>
        </div>
        <div className='follow'>
          <h4>Follow Us On</h4>
          <div className='icons'>
            <a href='fb'><img src={fb} alt='facebook' /></a>
            <a href='insta'><img src={insta} alt='instagram' /></a>
            <a href='viber'><img src={viber} alt='viber' /></a>
            <a href='tele'><img src={tele} alt='telegram' /></a>
            <a href='twitter'><img src={twitter} alt='twitter' /></a>
          </div>
        </div>
      </div>

      <div className='btn-footer'>
        <p>© Copyright 2023 C by D Co, Ltd. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer
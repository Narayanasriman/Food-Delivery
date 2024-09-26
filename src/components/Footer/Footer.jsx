import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div  className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium assumenda error, harum ducimus obcaecati, iste autem neque ab perspiciatis nihil? Odio ipsam magni esse officiis nesciunt cum tempora praesentium.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />

                 </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

        
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-98765432100</li>
                    <li>contact@toamto.com</li>
                </ul>

            </div>
           
        </div>
        <hr />
        <p className='footer-copy-right'>Copyright 2024 Tomato.com-All Rights Reserved.</p>

      
    </div>
  ) 
}

export default Footer

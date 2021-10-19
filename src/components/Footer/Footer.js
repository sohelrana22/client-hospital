import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="detail">
           <div className="container row col-6 p-5 text-white">
           <h2>Health Care</h2>
            <p>This department manages everything from minor to major injuries of life and other less severe medical conditions.We have separate facility of male and female care, we try to follow strict rule of PORDA to maintain Islamic environment.</p>
           </div>
           <div className="container row col-6 p-5 text-white">
               <h2>Opening Hours</h2>
               <h5>Monday:00.01 am - 23.59 pm</h5>
               <h5>Tuesday:00.01 am - 23.59 pm</h5>
               <h5>Wednesday:00.01 am - 23.59 pm</h5>
               <h5>Thursday:00.01 am - 23.59 pm</h5>
               <h5>Friday:00.01 am - 23.59 pm</h5>
           </div>
          
        </div>
        <p className="text-center text-white">Copyright © All Right Reserved</p>
        </div>
    );
};

export default Footer;
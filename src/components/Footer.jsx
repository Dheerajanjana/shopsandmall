import React from 'react'
import "../style/shop.css"
import "../style/mediaquery.css"

const Footer = () => {
  return (<>
 <footer className='footer' >
    <div className='container footer-container'>
        <div className='box'>
            <h4>About Store</h4>
            <p>Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit.
                  Odit ex sapiente laudantium.
                   Dignissimos odio unde ?</p>
                   <div className='social-icons'>
                        <i className='fa-brands fa-facebook' ></i>
                        <i className='fa-brands fa-instagram' ></i>
                        <i className='fa-brands fa-twitter' ></i>
                        <i className='fa-brands fa-linkedin' ></i>
                </div>
            </div>
                <ul className='box'>
                    <h4>Customer Care</h4>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Voucher</a></li>
                    <li><a href="">Wishlist</a></li>
                    <li><a href="">Customer Service</a></li>
                    <li><a href="">Site Maps</a></li>
                    <li><a href="">Exchange/Return</a></li>
                </ul>
                <ul className='box'>
                    <h4>Information</h4>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Order Tracking</a></li>
                </ul>
                <ul className='box'>
                    <h4>News</h4>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Exhibiton</a></li>
                </ul>
                <ul className='box'>
                    <h4>Contact Information</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat.</p>
                    <li><a href="">+123456789</a></li>
                   <li> <a href="">info@abcsite.com</a></li>
                    <li><a href="">abcsite.com</a></li>


                </ul>
     </div>
</footer>
<div className='copyright' >
<p>Copyright &copy; 2023 All Right Reserved. This template is made with 
    <i  className='fa-solid fa-heart'></i>
    by <a href="">Codeatusnan </a>
    Youtube Chennel.
    </p>
</div>
</>)
}

export default Footer

import React from 'react'
import "../style/mediaquery.css"

const Contect = () => {
  return (
    <div className='contact' id='contact' >
        <div className='title'>
            <h2>Contact Us</h2>
        </div>
      <div className='container' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.67471091678!2d75.86384989999999!3d22.723972749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1686827519238!5m2!1sen!2sin"  width="100%" height="300" style= {{border:"none"}} ></iframe>
      </div>
      <div className='container contact-container'>
        <div className='left'>

       
        <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Quo laboriosam eaque 
            ut? Eveniet minima pariatur ab id fugit
             excepturi iure sequi, illo, repellat 
             velit ea assumenda cumque deserunt, 
             enim autem?
        </p>
        <div className='box'>
            <i className='fa solid fa-map-marker'></i>
            <div>
                <h4>Address:</h4>
                <span>Indore</span>
            </div>
        </div>
        <div className='box'>
            <i className='fa solid fa-phone'></i>
            <div>
                <h4>Phone:</h4>
                <span>0123456789</span>
            </div>
        </div> <div className='box'>
            <i className='fa solid fa-envelope'></i>
            <div>
                <h4>Email:</h4>
                <span>abc@xyzgmail.com</span>
            </div>
        </div>
    </div>
    <div className='right'>
        <form action="" className='contact-from' >
            <div className='from-nate'>
                <input type="text" name='Frist Name' placeholder='Frist Name' required  />
                <input type="text" name='Last Name' placeholder='Last Name' required  />
             </div>
             <input type="email" name='Email Address' placeholder='Your Email Address' required />
             <textarea name="Message" rows="7" placeholder='Message' required></textarea>
             <button type='submit' className='btn' >Send Message</button>
        </form>
    </div>
</div>
<div className='newsletter'>
    <h2 c>Sign up for a Newsletter</h2>
    <div className='subscribe' >
        <input type="email" name="Subscrier's Email" required />
        <button type='submit' >Subscribe</button>

    </div>

</div>
</div>
)
}

export default Contect

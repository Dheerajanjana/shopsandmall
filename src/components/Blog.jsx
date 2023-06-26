import React from 'react'
import "../style/shop.css"
import "../style/mediaquery.css"

const Blog = () => {
  return (
    <div className='blog' id='blog'>
      <div className='title'>
        <h2>Our Blog</h2>
      </div>
      <div className='container blog-container'>
        <div className='card'>
          <div className='image'>
            <img src="https://images.pexels.com/photos/14828764/pexels-photo-14828764.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className='info' >
                <span>31 MAY</span>
                <h3>this  was one of our first day in hawali list work</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, amet.</p>
                  <button className='btn'>Read More</button>
              </div>
          </div>
      </div>
      <div className='card'>
          <div className='image'>
            <img src="https://images.pexels.com/photos/2495575/pexels-photo-2495575.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className='info' >
                <span>31 MAY</span>
                <h3>this  was one of our first day in hawali list work</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, amet.</p>
                  <button className='btn'>Read More</button>
              </div>
          </div>
      </div><div className='card'>
          <div className='image'>
            <img src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className='info' >
                <span>31 MAY</span>
                <h3>this  was one of our first day in hawali list work</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, amet.</p>
                  <button className='btn'>Read More</button>
              </div>
          </div>
      </div><div className='card'>
          <div className='image'>
            <img src="https://media.istockphoto.com/id/519579694/photo/lake-pichola-in-india.jpg?s=1024x1024&w=is&k=20&c=w_1NoKA0pQxNcypaPQocUyq3gLL8ZqtAnGklgkk4jeE=" alt="" />
              <div className='info' >
                <span>31 MAY</span>
                <h3>this  was one of our first day in hawali list work</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, amet.</p>
                  <button className='btn'>Read More</button>
              </div>
          </div>
      </div>
      <div className='container'>
        <div className='pagination'>
            <li><a href="">&#8810;</a></li> 
            <li><a href="">1</a></li> 
            <li><a href="">2</a></li> 
            
            <li><a href="">&#8811;</a></li> 
        </div>
    </div>
    </div>
    </div>
  )
}

export default Blog

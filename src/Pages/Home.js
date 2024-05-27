import React from 'react'
import './home.css'
import Typical from 'react-typical'
import Footer from './Footer/Footer'

function Home() {


  return (
    <div>
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
            <div className='colz'>
              <div className='colz-icon'>

                <a href='https://m.facebook.com'>
                    <i className='fa fa-facebook-square'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-twitter'></i>
                </a>
                <a href='https://web.whatsapp.com/'>
                    <i className='fa fa-whatapp'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-google'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-instagram'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-linkedin'></i>
                </a>
              </div>
            </div>

            <div className='profile-details-name'>
              <span className='primary-text'>
                {" "}
                Hello!! I'M <span className='highlighted-text'>Esther</span>
              </span>
            </div>

            <div className='profile-details-role'>
              <span className='primary-text'>
                {" "}
                <h1> 
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Ethusiastic Dev 😎",
                      3000,
                      "Frontend Developer 🐱‍👤",
                      3000,
                      "React Dev 🕵️‍♀️",
                      3000,
                      "React,JavaScript, Pro💻",
                      3000,
                    ]}
                  />
                </h1>
                <span className='profile-role-tagline'>Knack of building applications with Frontend operations</span>
              </span>
            </div>

            <div className='profile-options'>
              <button className='btn primary-btn'>
                {" "}
                Hire Me{" "}
              </button>
              <a href='esty-tech.pdf' download='ESTY TECH.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>

        </div>
            <div className='profile-picture'>
              <div className='profile-picture-background'>
                <img src='/images/Mine pix.jpeg' alt='mine' className='mine'/>
              </div>
            </div>
      </div>

    </div>
    <Footer/>
    </div>
  )
}

export default Home

// to move a block of code to another div =altkey + arrow(up or down).
// to bring out emoji on dsktop = window button , +, ., (click the three at once)
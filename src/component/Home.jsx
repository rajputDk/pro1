import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../common_component/Footer'
import Service from './Service'
import Price from './Price'
import About from './About'
import Contact from './Contact'
const Home = () => {
  return (
    <>
     {/* <!---header section start------> */}
     <section class="header-section">
          <div class="center-div">
              <h1 class="font-weight-bold"><span >Hii!</span> I am Deepak Rajput</h1>
              <h2>I am a web developer</h2>
              <p>I  creates multidesigning website and  Here Web Devlopment Agency</p>
              <div class="header-buttons">
                  <Link to={"/"}>About us</Link>
                  <Link to={"/"}>Contact us</Link>
              </div>
          </div>
      </section>
     
      <Service/>
      
     
      <Footer></Footer>

      {/* // <!---header section end------> */}

    </>
  )
}

export default Home

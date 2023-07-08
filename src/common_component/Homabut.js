import React from 'react'
import {Link} from 'react-router-dom'
const Homabut = () => {
  return (
    <>
      {/* <!---header section start------> */}
      <section class="header-section">
          <div class="center-div">
              <h1 class="font-weight-bold"><span >Hii!</span> I am Yogesh chauhan</h1>
              <h2>I am a web developer</h2>
              <p>I  creates multidesigning website and  Here Web Devlopment Agency</p>
              <div class="header-buttons">
                  <Link to={"/"}>About us</Link>
                  <Link to={"/"}>Contact us</Link>
              </div>
          </div>
      </section>

      {/* // <!---header section end------> */}

    </>
  )
}

export default Homabut

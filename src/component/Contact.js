import React from 'react'
import Footer from '../common_component/Footer'

const Contact = () => {
  return (
    <>
      {/* <!----**********  CONTACT US PART STARTS***********--> */}
           <section classname="maincontact " id="contact"> 
               <div>
                  <h2 classname="text-center pt-3 conth2">CONTACT US</h2>
                  <p classname="text-center ">We're here to help and any answer any quetion you might have a we look forward to hearing from you</p>
              </div>
              {/* <div classname="container"> */}
                <div classname="row">
                  <div classname="col-lg-10 col-md-8 col-10 offset-lg-2 offset-md-2 col-1">
                    {/* <!----forms part start--> */}
                    <form action="/action_page.php">
                      <div classname="form-group">
                        <input type="text" classname="form-control" placeholder="Enter Your Name" id="username" required autocomplete="off"/>
                      </div>                
                      
                      
                        <div classname="form-group">
                          <input type="email" classname="form-control" placeholder="Enter Your Email" id="email" required autocomplete="off"/>
                        </div>                 

                        
                          <div classname="form-group">
                            <input type="number" classname="form-control" placeholder="Enter Your number" id="mobile" required autocomplete="off"/>
                          </div>          
                          <div classname="form-group">
                            <textarea classname="form-control" rows="4" id="comment" placeholder="Enter Your Message"></textarea>
                          </div>                                 
                          <div classname=" d-flex justify-content-center divbtn">
                            <button type="submit" classname="btn btn-primary btn1">submit</button>
                          </div>
                    </form>
                    {/* <!---form part end--> */}
                  </div>
                </div>
              </section>

   {/* <!----**********CONTACT US PART ENDS***********--> */}

   <Footer></Footer>
    </>
  )
}

export default Contact

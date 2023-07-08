import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../common_component/Footer'

const Price = () => {
  return (
    <>
    {/* <!----**********pricing part start***********--> */}
          <section className="mainboxprice" >
            <p>OUR PRICING</p>
             <div className="container">
               <div className="row">
                 {/* <!----Card--> */}
                 <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="card text-center">
                    <div className="card-header">Basaic Plan</div>
                    <div className="card-body">
                      <li>$<span>20</span>/Website</li>
                      <li>Responsive Website</li>
                      <li>DomainName Free</li>
                      <li>Mobile Friendly</li>
                      <li>Webmail Support</li>
                      <li>Customer Support 24/7</li>
                    </div>
                    <div className="card-footer"><Link to={'/'}>Purchase</Link></div>
                  </div>
                 </div>
                 {/* <!----Card--> */}

                 {/* <!----Card--> */}
                 <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="card  text-center">
                    <div className="card-header">Standerd Plans</div>
                    <div className="card-body">
                      <li>$<span>79</span>/Website</li>
                      <li>Responsive Website</li>
                      <li>DomainName Free</li>
                      <li>Mobile Friendly</li>
                      <li>Webmail Support</li>
                      <li>Customer Support 24/7</li>
                    </div>
                    <div className="card-footer"><Link to={'/'}>Purchase</Link></div>
                  </div>
                 </div>
                 {/* <!----Card--> */}

                 {/* <!----Card--> */}
                 <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="card    text-center">
                    <div className="card-header">Premium Plan</div>
                    <div className="card-body">
                      <li>$<span>90</span>/Website</li>
                      <li>Responsive Website</li>
                      <li>DomainName Free</li>
                      <li>Mobile Friendly</li>
                      <li>Webmail Support</li>
                      <li>Customer Support 24/7</li>
                    </div>
                    <div className="card-footer"><Link to={'/'}>Purchase</Link></div>
                  </div>
                 </div>
                 {/* <!----Card--> */}
               </div>
             </div>
          </section>
  {/* <!----**********pricing part End***********--> */}
  <Footer></Footer>
    </>
  )
}

export default Price
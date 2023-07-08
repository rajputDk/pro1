import React from 'react'
import img1 from '../images/html.jpg'
const Card = () => {
  return (
    <>
      <section >
       <div className='container-fluid'>
         <div className='row '>
         <div className='col-sm-4 col-md-4 col-lg-4 '>
              {/* card start */}
              <div className="card" style={{width:"18rem"}}>
                <img src={img1} className="card-img-top" alt="img1"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div> 
              {/* card end */}
            </div>
         </div>
       </div>
     </section> 
    </>      
    
  )
}

export default Card

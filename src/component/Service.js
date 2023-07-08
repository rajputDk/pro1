import React from 'react' 
import Footer from '../common_component/Footer'
const Service = () => {
  return (
    <>
      {/* <!---Services part start --> */}
        <div class="servicepart py-5" id="serviceid">
                 <h2 >SERVICES</h2>
                 <p className='text-center'>All Services available here</p>

            <div class="container py-5">
               <div class="row">
                 {/* <!---PROGRESS AREA(SIDE) START--> */}
                   <div class="col-sm-6 col-md-6 col-lg-6">
                       <div class="myskills">
                        <span>HTML</span><i class="fa fa-html5  w-25" aria-hidden="true"></i>
                          <div class="progress my-2">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" 
                           aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                          </div>

                          <span>CSS</span><i class="fa fa-css3 px-2" aria-hidden="true"></i>
                          <div class="progress my-2">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" 
                           aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>90</div>
                          </div>

                          <span>JavaScript</span>
                          <div class="progress  my-2">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" 
                           aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>85</div>
                          </div>
                          <span>BOOTSTRAP</span>
                          <div class="progress my-2">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" 
                           aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>90</div>
                          </div>
                          <span>REACT JS</span>
                          <div class="progress  my-2">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" 
                           aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>70</div>
                          </div>
                       </div>
                   </div> 
                   {/* <!---PROGRESS AREA(SIDE) END--> */}

        {/* <!---WHAT DO WE RIGHT SIDE START--> */}
                   <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="row">
                      <div class="col-sm-2 col-md-2 col-lg-2 ">
                        <i class="fa fa-desktop  fa-3x  srcicon" aria-hidden="true"></i>
                      </div>
                      <div class="col-sm-10 col-md-10 col-lg-10 divII">
                        <h3>Web Design</h3>
                        <p class="divIIpara">
                          Design your website with best with the best User Interaction Technologies like Adobe XD, Figma.
                         We have in best team member of Designing who have great expertise on Designing website from scratch to end.</p>
                      </div>

                      <div class="col-sm-2 col-md-2 col-lg-2 ">
                        <i class="fa fa-wifi  fa-3x  srcicon" aria-hidden="true"></i>
                      </div>
                      <div class="col-sm-10 col-md-10 col-lg-10 divII">
                        <h3>Seo Friendly Website</h3>
                        <p class="divIIpara">
                          SEO optimized website is main behind the ranking of a website on Google and other search engines We
                           follow core vital Web factors by Google to make website highly seo friendly</p>
                      </div>

                      <div class="col-sm-2 col-md-2 col-lg-2 ">
                        <i class="fa fa-mobile  fa-3x  srcicon" aria-hidden="true"></i>
                      </div>
                      <div class="col-sm-10 col-md-10 col-lg-10 divII">
                        <h3>100% Mobile Responsive</h3>
                        <p class="divIIpara">
                          Get your device responsive website to reach your potential audience across all the devices. We have
                           expertise in trending technologies, frameworks, tools for to make website Fully mobile responsive</p>
                      </div>
                    </div>
                   </div>
         {/* <!---WHAT DO WE RIGHT SIDE END--> */}
               </div>
            </div>
        </div>
       {/* <!---Services part end --> */}

<Footer></Footer>
    </>
  )
}

export default Service
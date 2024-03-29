import React from 'react';
import agent1 from '../../assest/images/agents/agent1.jpg'

const AgentV3 = () => {

  return(
<div className="agent-area text-center pd-top-118 pd-bottom-90">
              <div className="container">
                <div className="section-title text-center">
                  <h6>Meet Our Agent</h6>
                  <h2>Our Best Agent</h2>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={agent1} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Chinyere Ofoma</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/agent/8.png"} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Sarif Miprut</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/agent/9.png"} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Jordan Smith</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Jaya Sarif</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/agent/11.png"} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Sandara Mrikon</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/agent/12.png"} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Sarif Miprut</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/agent/13.png"} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Jordan Smith</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/agent/14.png"} alt="img" />
                      </div> 
                      <div className="details">
                        <h4>Jaya Sarif</h4>
                        <h6>Estate Agent</h6>
                        <ul className="social-area style-2">
                          <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>        
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
  )
}
// class AgentV3 extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="agent-area text-center pd-top-118 pd-bottom-90">
//               <div className="container">
//                 <div className="section-title text-center">
//                   <h6>Meet Our Agent</h6>
//                   <h2>Our Best Agent</h2>
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/images/agents/agent1.jpg"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Chinyere Ofoma</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div>
//                   {/* <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/8.png"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Sarif Miprut</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/9.png"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Jordan Smith</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Jaya Sarif</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/11.png"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Sandara Mrikon</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/12.png"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Sarif Miprut</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/13.png"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Jordan Smith</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/14.png"} alt="img" />
//                       </div> 
//                       <div className="details">
//                         <h4>Jaya Sarif</h4>
//                         <h6>Estate Agent</h6>
//                         <ul className="social-area style-2">
//                           <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                           <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                         </ul>
//                       </div>        
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//             </div>

//         }
// }

export default AgentV3
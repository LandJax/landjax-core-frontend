import React from 'react';

const Team = () =>  {
  let publicUrl = process.env.PUBLIC_URL+'/'
return(
  <div className="agent-area text-center pd-top-118 pd-bottom-90">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img className='thumb-image' src={publicUrl+"assets/images/agents/david-cut.png" } alt="img" />
                    </div> 
                    <div className="details">
                      <h4>DAVIDSON C. NKEDIFE</h4>
                      <h6>CEO LANDJAX</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img src={publicUrl+"assets/images/agents/frank.jpg"} alt="img" />
                    </div> 
                    <div className="details">
                      <h4>FRANK NORBERT MBA</h4>
                      <h6>BLOCKCHAIN ENGINEER</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img src={publicUrl+"assets/images/agents/moscow.jpg"} alt="img" />
                    </div> 
                    <div className="details">
                      <h4>MOSES ONWE </h4>
                      <h6>UI/UX DESIGNER</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
                    </div> 
                    <div className="details">
                      <h4>SOMTO</h4>
                      <h6>WEB DEVELOPER</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div> */}
                {/*<div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
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
                </div>
                <div className="col-lg-4 col-md-6">
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
                </div> */}
              </div>
              <div className="row">
                
                <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img className='thumb-image' src={publicUrl+"assets/images/agents/juliet.jpg" } alt="juliet" />
                    </div> 
                    <div className="details">
                      <h4>JULIET S. CHIME</h4>
                      <h6>FRONTEND DEVELOPER</h6>
                      <ul className="social-area style-2">
                        <li><a href="https://web.facebook.com/chime.juli/" target='_blank'><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="https://www.linkedin.com/in/chime-juliet-somtochukwu/" target='_blank'><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="https://www.instagram.com/speedy_sommy/" target='_blank'><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="https://twitter.com/speedysommy" target='_blank'><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>

                 <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img src={publicUrl+"assets/images/agents/joe.jpeg"} alt="img" />
                    </div> 
                    <div className="details">
                      <h4>AKPAN JOSEPH</h4>
                      <h6>BLOCKCHAIN ENGINEER</h6>
                      <ul className="social-area style-2">
                        {/* <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li> */}
                        <li><a href="https://www.linkedin.com/in/syntaxdesigner/"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        {/* <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li> */}
                        <li><a href="https://www.twitter.com/syntaxdesigner"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img src={publicUrl+"assets/images/agents/precious.jpeg"} alt="img" />
                    </div> 
                    <div className="details">
                      <h4>NKWUA PRECIOUS C. NOEL</h4>
                      <h6>AR/VR Engineer</h6>
                      <ul className="social-area style-2">
                        <li><a href="https://www.facebook.com/nkwua.precious?mibextid=ZbWKwL"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="https://www.linkedin.com/in/nkwua-precious-b22885202"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="https://instagram.com/ayam_presh?igshid=ZDdkNTZiNTM="><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="https://twitter.com/nkonceptz?t=U4AivGmQkr0MkKvlFSetOQ&s=08"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>

                {/* <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-2 text-center">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
                    </div> 
                    <div className="details">
                      <h4>SOMTO</h4>
                      <h6>WEB DEVELOPER</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div> */}
                {/*<div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
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
                </div>
                <div className="col-lg-4 col-md-6">
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
                </div> */}
              </div>
            </div>
          </div>
)

}

// class Team extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="agent-area text-center pd-top-118 pd-bottom-90">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img className='thumb-image' src={publicUrl+"assets/images/agents/david-cut.png" } alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>DAVIDSON C. NKEDIFE</h4>
//                       <h6>CEO LANDJAX</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                  <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/images/agents/frank.jpg"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>FRANK NORBERT MBA</h4>
//                       <h6>BLOCKCHAIN ENGINEER</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/images/agents/moscow.jpg"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>MOSES ONWE </h4>
//                       <h6>UI/UX DESIGNER</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 {/* <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>SOMTO</h4>
//                       <h6>WEB DEVELOPER</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div> */}
//                 {/*<div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/11.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Sandara Mrikon</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/12.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Sarif Miprut</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/13.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Jordan Smith</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/14.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Jaya Sarif</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Jaya Sarif</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div> */}
//               </div>
//               <div className="row">
                
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img className='thumb-image' src={publicUrl+"assets/images/agents/juliet.jpg" } alt="juliet" />
//                     </div> 
//                     <div className="details">
//                       <h4>JULIET S. CHIME</h4>
//                       <h6>FRONTEND DEVELOPER</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="https://web.facebook.com/chime.juli/" target='_blank'><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="https://www.linkedin.com/in/chime-juliet-somtochukwu/" target='_blank'><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="https://www.instagram.com/speedy_sommy/" target='_blank'><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="https://twitter.com/speedysommy" target='_blank'><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>

//                  <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/images/agents/frank.jpg"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>FRANK NORBERT MBA</h4>
//                       <h6>BLOCKCHAIN ENGINEER</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>

//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/images/agents/moscow.jpg"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>MOSES ONWE </h4>
//                       <h6>UI/UX DESIGNER</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>

//                 {/* <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>SOMTO</h4>
//                       <h6>WEB DEVELOPER</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div> */}
//                 {/*<div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/11.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Sandara Mrikon</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/12.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Sarif Miprut</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/13.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Jordan Smith</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/14.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Jaya Sarif</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="single-agent-wrap style-2 text-center">
//                     <div className="thumb">
//                       <img src={publicUrl+"assets/img/agent/10.png"} alt="img" />
//                     </div> 
//                     <div className="details">
//                       <h4>Jaya Sarif</h4>
//                       <h6>Estate Agent</h6>
//                       <ul className="social-area style-2">
//                         <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                       </ul>
//                     </div>        
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>

//         }
// }

export default Team
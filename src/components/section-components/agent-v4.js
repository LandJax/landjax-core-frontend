import React from 'react';
import agent7 from '../../assest/img/agent/7.png'
import agent8 from '../../assest/img/agent/8.png'
import agent9 from '../../assest/img/agent/9.png'
import agent10 from '../../assest/img/agent/10.png'

const AgentV4 = () => {

  return(
    <div className="agent-area bg-black pd-top-118 pd-bottom-90">
              <div className="container">
                <div className="section-title style-white text-center">
                  <h6>Meet Our Agent</h6>
                  <h2>Our Best Agent</h2>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                        <img src={agent7} alt="img" />
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
                        <img src={agent8} alt="img" />
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
                        <img src={agent9} alt="img" />
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
                        <img src={agent10} alt="img" />
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
                </div>
              </div>
            </div>
  )
}


// class AgentV4 extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="agent-area bg-black pd-top-118 pd-bottom-90">
//               <div className="container">
//                 <div className="section-title style-white text-center">
//                   <h6>Meet Our Agent</h6>
//                   <h2>Our Best Agent</h2>
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="single-agent-wrap style-2 text-center">
//                       <div className="thumb">
//                         <img src={publicUrl+"assets/img/agent/7.png"} alt="img" />
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
//                 </div>
//               </div>
//             </div>

//         }
// }

export default AgentV4
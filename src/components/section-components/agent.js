import React from 'react';
import author4 from '../../assest/images/author4.png'
import author2 from '../../assest/images/author2.png'
import author3 from '../../assest/images/author3.png'


const Agent  = () => {
  // let publicUrl = process.env.PUBLIC_URL+'/'
  return(
    <div className="agent-area text-center pd-top-118 pd-bottom-90">
          <div className="container">
            <div className="section-title text-center">
              <h6>Meet Our Agents</h6>
              <h2>Our Best Agents</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-agent-wrap">
                  <div className="thumb">
                    <img src={author4} alt="img" />
                  </div> 
                  <div className="details">
                    <h4>Sandara mkpokiti</h4>
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
                <div className="single-agent-wrap">
                  <div className="thumb">
                    <img src={author2} alt="img" />
                  </div> 
                  <div className="details">
                    <h4>Oyibo Victor</h4>
                    <h6>Area Agent</h6>
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
                <div className="single-agent-wrap">
                  <div className="thumb">
                    <img src={author3} alt="img" />
                  </div> 
                  <div className="details">
                    <h4>Stella Maris</h4>
                    <h6>Expert Personnel</h6>
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
// class Agent extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="agent-area text-center pd-top-118 pd-bottom-90">
//           <div className="container">
//             <div className="section-title text-center">
//               <h6>Meet Our Agents</h6>
//               <h2>Our Best Agents</h2>
//             </div>
//             <div className="row justify-content-center">
//               <div className="col-lg-4 col-md-6">
//                 <div className="single-agent-wrap">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/images/author4.png"} alt="img" />
//                   </div> 
//                   <div className="details">
//                     <h4>Sandara mkpokiti</h4>
//                     <h6>Estate Agent</h6>
//                     <ul className="social-area style-2">
//                       <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                     </ul>
//                   </div>        
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <div className="single-agent-wrap">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/images/author2.png"} alt="img" />
//                   </div> 
//                   <div className="details">
//                     <h4>Oyibo Victor</h4>
//                     <h6>Area Agent</h6>
//                     <ul className="social-area style-2">
//                       <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                     </ul>
//                   </div>        
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <div className="single-agent-wrap">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/images/author3.png"} alt="img" />
//                   </div> 
//                   <div className="details">
//                     <h4>Stella Maris</h4>
//                     <h6>Expert Personnel</h6>
//                     <ul className="social-area style-2">
//                       <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
//                       <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
//                     </ul>
//                   </div>        
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//         }
// }

export default Agent
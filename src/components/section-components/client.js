import React from 'react';
import { Link } from 'react-router-dom';

import client2 from '../../assest/img/client/2.png'
import client3 from '../../assest/img/client/3.png'
import client4 from '../../assest/img/client/4.png'
import client5 from '../../assest/img/client/5.png'

const Client = () => {
  // let publicUrl = process.env.PUBLIC_URL+'/'
  return(
    <div>
    <div className="client-area client-area-pd bg-overlay pd-top-118">
      <div className="container">
        <div className="row justify-content-center text-lg-left text-center">
          <div className="col-lg-9">
            <div className="section-title style-white mb-0">
              <h6>Buy Or Sell</h6>
              <h2>Find Best Place For Leaving</h2>
              <p>With experts in every part of the world, we are local everywhere, allowing us to walk alongside our clients at every stage of their journey.</p>
            </div>
          </div>
          <div className="col-lg-3 align-self-end text-lg-right mt-4 mt-lg-0 go-top">
            <Link className="btn btn-base" to="/add-property">SUBMIT</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="client-slider bg-main style-two owl-carousel">
        <div className="item">
          <div className="thumb">
            <img src={client2} alt="img" />
          </div>
        </div>
        <div className="item">
          <div className="thumb">
            <img src={client3} alt="img" />
          </div>
        </div>
        <div className="item">
          <div className="thumb">
            <img src={client4} alt="img" />
          </div>
        </div>
        <div className="item">
          <div className="thumb">
            <img src={client5} alt="img" />
          </div>
        </div>
        <div className="item">
          <div className="thumb">
            <img src={client2} alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
// class Client extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div>
//           <div className="client-area client-area-pd bg-overlay pd-top-118" style={{background: 'url('+publicUrl+'assets/img/other/3.png)'}}>
//             <div className="container">
//               <div className="row justify-content-center text-lg-left text-center">
//                 <div className="col-lg-9">
//                   <div className="section-title style-white mb-0">
//                     <h6>Buy Or Sell</h6>
//                     <h2>Find Best Place For Leaving</h2>
//                     <p>With experts in every part of the world, we are local everywhere, allowing us to walk alongside our clients at every stage of their journey.</p>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 align-self-end text-lg-right mt-4 mt-lg-0 go-top">
//                   <Link className="btn btn-base" to="/add-property">SUBMIT</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <div className="client-slider bg-main style-two owl-carousel">
//               <div className="item">
//                 <div className="thumb">
//                   <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="thumb">
//                   <img src={publicUrl+"assets/img/client/3.png"} alt="img" />
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="thumb">
//                   <img src={publicUrl+"assets/img/client/4.png"} alt="img" />
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="thumb">
//                   <img src={publicUrl+"assets/img/client/5.png"} alt="img" />
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="thumb">
//                   <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         }
// }

export default Client
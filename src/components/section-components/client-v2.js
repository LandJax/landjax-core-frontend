import React from 'react';

const ClientV2 = () => {
  let publicUrl = process.env.PUBLIC_URL+'/'
  return(
    <div className="client-area bg-main">
            <div className="container">
              <div className="client-slider owl-carousel">
                <div className="item">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/client/1.png"} alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/client/3.png"} alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/client/4.png"} alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/client/5.png"} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

// class ClientV2 extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="client-area bg-main">
//             <div className="container">
//               <div className="client-slider owl-carousel">
//                 <div className="item">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/img/client/1.png"} alt="img" />
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/img/client/3.png"} alt="img" />
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/img/client/4.png"} alt="img" />
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="thumb">
//                     <img src={publicUrl+"assets/img/client/5.png"} alt="img" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         }
// }

export default ClientV2
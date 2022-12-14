import React from 'react';
import {FaSellsy} from 'react-icons/fa'
import {GiIsland} from 'react-icons/gi'
import {GiFamilyHouse} from 'react-icons/gi'

const Service = () => {
	return(
		<div className="service-area">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb center-logo">
			            {/* <img src={publicUrl+"assets/img/service/1.png"} alt="icon" /> */}
						<FaSellsy className='beam-anim' style={{color: "white", fontSize: "4rem"}}/>
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Sell Property</a></h4>
			            <p>List your assets with us and receive payments fast.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
						<GiIsland className='beam-anim' style={{color: "white", fontSize: "4rem"}} />
			            {/* <img src={publicUrl+"assets/img/service/2.png"} alt="icon" /> */}
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Land Listing</a></h4>
			            <p>Sell landed property from any part of the world.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap mb-0">
			          <div className="thumb">
			            {/* <img src={publicUrl+"assets/img/service/3.png"} alt="icon" /> */}
						<GiFamilyHouse className='beam-anim' style={{color: "white", fontSize: "4rem"}}/>
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Home Owners</a></h4>
			            <p>Securely purchase lands and houses from any part of the world.</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
	)
}

// class Service extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return  <div className="service-area">
// 			  <div className="container">
// 			    <div className="row justify-content-center">
// 			      <div className="col-lg-4 col-md-10">
// 			        <div className="single-service-wrap">
// 			          <div className="thumb center-logo">
// 			            {/* <img src={publicUrl+"assets/img/service/1.png"} alt="icon" /> */}
// 						<FaSellsy className='beam-anim' style={{color: "white", fontSize: "4rem"}}/>
// 			          </div>
// 			          <div className="single-service-details">
// 			            <h4><a href="property-details.html">Sell Property</a></h4>
// 			            <p>List your assets with us and receive payments fast.</p>
// 			          </div>
// 			        </div>
// 			      </div>
// 			      <div className="col-lg-4 col-md-10">
// 			        <div className="single-service-wrap">
// 			          <div className="thumb">
// 						<GiIsland className='beam-anim' style={{color: "white", fontSize: "4rem"}} />
// 			            {/* <img src={publicUrl+"assets/img/service/2.png"} alt="icon" /> */}
// 			          </div>
// 			          <div className="single-service-details">
// 			            <h4><a href="property-details.html">Land Listing</a></h4>
// 			            <p>Sell landed property from any part of the world.</p>
// 			          </div>
// 			        </div>
// 			      </div>
// 			      <div className="col-lg-4 col-md-10">
// 			        <div className="single-service-wrap mb-0">
// 			          <div className="thumb">
// 			            {/* <img src={publicUrl+"assets/img/service/3.png"} alt="icon" /> */}
// 						<GiFamilyHouse className='beam-anim' style={{color: "white", fontSize: "4rem"}}/>
// 			          </div>
// 			          <div className="single-service-details">
// 			            <h4><a href="property-details.html">Home Owners</a></h4>
// 			            <p>Securely purchase lands and houses from any part of the world.</p>
// 			          </div>
// 			        </div>
// 			      </div>
// 			    </div>
// 			  </div>
// 			</div>


//         }
// }

export default Service
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assest/images/3.png'

const CallToAction = () => {
	// let publicUrl = process.env.PUBLIC_URL+'/'
	return(
		<div className="cta-area bg-overlay pd-top-118 go-top pd-bottom-120 text-center" style={{background: `url(${bg})`}}>
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-xl-8 col-lg-10">
		        <div className="section-title style-white mb-0">
		          <h6>Buy Or Sell</h6>
		          <h2>Submit Property or Land</h2>
		          <p>Submit a home that will suit your peoples life style lifestyle.</p>
		        </div>
		        <div className="btn-wrap mt-4 pt-3">
		          <Link className="btn btn-base mr-2" to="/add-property">SUBMIT</Link>
		          <Link className="btn btn-base ml-2" to="/property-details">BUY NOW</Link>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	)
}
//  class CallToAction extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="cta-area bg-overlay pd-top-118 go-top pd-bottom-120 text-center" style={{background: 'url('+publicUrl+'assets/images/3.png)'}}>
// 		  <div className="container">
// 		    <div className="row justify-content-center">
// 		      <div className="col-xl-8 col-lg-10">
// 		        <div className="section-title style-white mb-0">
// 		          <h6>Buy Or Sell</h6>
// 		          <h2>Submit Property or Land</h2>
// 		          <p>Submit a home that will suit your peoples life style lifestyle.</p>
// 		        </div>
// 		        <div className="btn-wrap mt-4 pt-3">
// 		          <Link className="btn btn-base mr-2" to="/add-property">SUBMIT</Link>
// 		          <Link className="btn btn-base ml-2" to="/property-details">BUY NOW</Link>
// 		        </div>
// 		      </div>
// 		    </div>
// 		  </div>
// 		</div>

//         }
// }

export default CallToAction
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';






const Footer_v2 = () => {

	useEffect(() => {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	})


	let publicUrl = process.env.PUBLIC_URL + '/'

	return (
		<footer className="footer-area style-two  go-top" style={{ background: 'url(' + publicUrl + 'assets/images/3.png)' }}>
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-4">
							<img style={{ width: "5rem", height: "5rem" }} src={publicUrl + "assets/images/logo/logo200.png"} alt="img" />

							{/* <h4 style={{color: "#FFFFFF"}}>LAND<span style={{color: "#5BA600"}}>JAX</span></h4> */}
						</div>
						{/* <div className="col-lg-6 col-md-8 text-md-right mt-3 mt-md-0">
							<ul className="social-area">
								<li><a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
								<li><a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
								<li><a href="https://www.instagram.com/solverwp/"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
								<li><a href="https://www.skype.com/solverwp/"><i className="fab fa-skype" aria-hidden="true" /></a></li>
								<li><a href="https://www.pinterest.com/solverwp/"><i className="fab fa-pinterest-p" aria-hidden="true" /></a></li>
							</ul>
						</div> */}
					</div>
				</div>
			</div>
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="widget widget_about">
								<h4 className="widget-title">Contact Us</h4>
								<div className="details">
									<p><i className="fas fa-map-marker-alt" />
										Founded in 1976 to provide independent brokerages
										with a powerful marketing and referral program for
										luxury listings, the Landjax was designed to connect
										the finest independent real estate companies to the
										most prestigious clientele in the world. LandJax LLC
										is a subsidiary of Realogy Holdings Corp. (NYSE:
										RLGY), a global leader in real estate franchising and
										provider of real estate brokerage, relocation and
										Land services.

									</p>
									{/* <p><i className="fas fa-phone-volume" /> +(066) 19 5017 800 628</p>
									<p><i className="fas fa-envelope" /> info.contact@gmail.com</p> */}
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="widget widget_nav_menu">
								<h4 className="widget-title">NEWS FEED</h4>
								<ul>
									{/* <li><Link to="/about">About Us</Link></li>
									<li><Link to="/property">Property</Link></li>
									<li><Link to="/add-property">Add Property</Link></li>
									<li><Link to="/contact">Contact Us</Link></li> */}
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="widget widget_nav_menu">
								<h4 className="widget-title">NEWS LETTER</h4>
								<ul>
									{/* <li><Link to="/blog">Arts &amp; Design</Link></li>
									<li><Link to="/blog">Business</Link></li>
									<li><Link to="/blog">Computer Science</Link></li>
									<li><Link to="/blog">Data Science</Link></li> */}
								</ul>
							</div>
						</div>
						{/* <div className="col-lg-4 col-md-6">
							<div className="widget widget_subscribe">
								<h4 className="widget-title">Newsletter</h4>
								<div className="details">
									<p>Submit Email</p>
									<div className="footer-subscribe-inner">
										<input type="text" placeholder="Your Mail" />
										<a className="btn btn-base" href="#">Subscribe</a>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<p>©2022, Copy Right By landjax. All Rights Reserved</p>
						</div>
						<div className="col-lg-6 text-lg-right">
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>


	)
}
// class Footer_v2 extends Component {

// 	componentDidMount() {
// 		let publicUrl = process.env.PUBLIC_URL + '/'
// 		const minscript = document.createElement("script");
// 		minscript.async = true;
// 		minscript.src = publicUrl + "assets/js/main.js";

// 		document.body.appendChild(minscript);
// 	}

// 	render() {

// 		let publicUrl = process.env.PUBLIC_URL + '/'
// 		// let imgattr = "Footer logo"

// 		return (
// 			<footer className="footer-area style-two mg-top-100 go-top" style={{ background: 'url(' + publicUrl + 'assets/images/3.png)' }}>
// 				<div className="footer-top">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-lg-6 col-md-4">
// 							<img style={{width: "5rem", height: "5rem"}} src={publicUrl+"assets/images/logo/logo200.png"} alt="img" />

// 							{/* <h4 style={{color: "#FFFFFF"}}>LAND<span style={{color: "#5BA600"}}>JAX</span></h4> */}
// 							</div>
// 							<div className="col-lg-6 col-md-8 text-md-right mt-3 mt-md-0">
// 								<ul className="social-area">
// 									<li><a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
// 									<li><a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
// 									<li><a href="https://www.instagram.com/solverwp/"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
// 									<li><a href="https://www.skype.com/solverwp/"><i className="fab fa-skype" aria-hidden="true" /></a></li>
// 									<li><a href="https://www.pinterest.com/solverwp/"><i className="fab fa-pinterest-p" aria-hidden="true" /></a></li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="footer-middle">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-lg-4 col-md-6">
// 								<div className="widget widget_about">
// 									<h4 className="widget-title">Contact Us</h4>
// 									<div className="details">
// 										<p><i className="fas fa-map-marker-alt" /> 420 Love Sreet 133/2 Okpo City, kaduna state</p>
// 										<p><i className="fas fa-phone-volume" /> +(066) 19 5017 800 628</p>
// 										<p><i className="fas fa-envelope" /> info.contact@gmail.com</p>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-lg-2 col-md-6">
// 								<div className="widget widget_nav_menu">
// 									<h4 className="widget-title">Quick link</h4>
// 									<ul>
// 										<li><Link to="/about">About Us</Link></li>
// 										<li><Link to="/property">Property</Link></li>
// 										<li><Link to="/add-property">Add Property</Link></li>
// 										<li><Link to="/contact">Contact Us</Link></li>
// 									</ul>
// 								</div>
// 							</div>
// 							<div className="col-lg-2 col-md-6">
// 								<div className="widget widget_nav_menu">
// 									<h4 className="widget-title">Categories</h4>
// 									<ul>
// 										<li><Link to="/blog">Arts &amp; Design</Link></li>
// 										<li><Link to="/blog">Business</Link></li>
// 										<li><Link to="/blog">Computer Science</Link></li>
// 										<li><Link to="/blog">Data Science</Link></li>
// 									</ul>
// 								</div>
// 							</div>
// 							<div className="col-lg-4 col-md-6">
// 								<div className="widget widget_subscribe">
// 									<h4 className="widget-title">Newsletter</h4>
// 									<div className="details">
// 										<p>Submit Email</p>
// 										<div className="footer-subscribe-inner">
// 											<input type="text" placeholder="Your Mail" />
// 											<a className="btn btn-base" href="#">Subscribe</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="footer-bottom">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-lg-6 align-self-center">
// 								<p>©2022, Copy Right By landjax. All Rights Reserved</p>
// 							</div>
// 							<div className="col-lg-6 text-lg-right">
// 								<ul>
// 									<li>
// 										<Link to="/">Home</Link>
// 									</li>
// 									<li>
// 										<Link to="/about">About</Link>
// 									</li>
// 									<li>
// 										<Link to="/blog">Blog</Link>
// 									</li>
// 									<li>
// 										<Link to="/contact">Contact</Link>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</footer>


// 		)
// 	}
// }


export default Footer_v2
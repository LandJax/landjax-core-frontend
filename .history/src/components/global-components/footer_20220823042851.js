import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="footer-area">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
							<img style={{width: "5rem", height: "5rem"}} src={publicUrl+"assets/images/logo.svg"} alt="img" />

							{/* <h4 style={{color: "#FFFFFF"}}>LAND<span style={{color: "#5BA600"}}>JAX</span></h4> */}
							</div>
							<div className="col-md-8 text-md-right mt-3 mt-md-0">
								<ul className="social-area">
									<li><a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
									<li><a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
									<li><a href="https://www.instagram.com/solverwp/"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
									<li><a href="https://www.skype.com/solverwp/"><i className="fab fa-skype" aria-hidden="true" /></a></li>
									<li><a href="https://www.pinterest.com/solverwp/"><i className="fab fa-pinterest-p" aria-hidden="true" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-middle bg-black">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_about">
									<h4 className="widget-title">Company</h4>
									<div className="details">
										<p>Founded in 1976 to provide independent brokerages with a powerful marketing and referral program for luxury listings, 
											the Sotheby's International Realty network was designed to connect the finest independent real estate companies to the most prestigious clientele in the world. Sotheby's International Realty Affiliates LLC is a subsidiary of Realogy Holdings Corp. (NYSE: RLGY),
											 a global leader in real estate franchising and provider of real estate brokerage, relocation and settlement services.</p>
										<p><i className="fas fa-map-marker-alt" /> 420 Love Sreet 133/2 Mirpur City, Dhaka</p>
										<p><i className="fas fa-phone-volume" /> +(066) 19 5017 800 628</p>
										<p><i className="fas fa-envelope" /> info.contact@gmail.com</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_newsfeed">
									<h4 className="widget-title">News Feed</h4>
									<ul className="go-top">
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 9 , 2021</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 9 , 2020</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 11 , 2020</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Januray 9 , 2020</span></li>
										<li><Link to="/blog"><i className="far fa-user" />By Admin</Link><span><i className="far fa-calendar-alt" />Marce 9 , 2020</span></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-9">
								<div className="widget widget_subscribe mb-4">
									<h4 className="widget-title">Newslatter</h4>
									<div className="details">
										<p>Lorem ipsum dolor sit amet,</p>
										<div className="footer-subscribe-inner">
											<input type="text" placeholder="Your Mail" />
											<a className="btn btn-base" href="#">Subscribe</a>
										</div>
									</div>
								</div>
								<div className="widget widget-tags pt-2 go-top">
									<h5 className="widget-title mb-3">House Tags</h5>
									<div className="tagcloud mt-0">
										<Link to="/blog">Creative</Link>
										<Link to="/blog">Development</Link>
										<Link to="/blog">Beach</Link>
										<Link to="/blog">Villa</Link>
										<Link to="/blog">Clean</Link>
										<Link to="/blog">Seo</Link>
										<Link to="/blog">Appertment</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom bg-black">
					<div className="container">
						<div className="row">
							<div className="col-md-7 align-self-center">
								<p>©2022, Copy Right By Solverwp. All Rights Reserved</p>
							</div>
							<div className="col-md-5 text-md-right go-top">
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
}


export default Footer_v1
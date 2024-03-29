import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import location from "../../assest/img/icon/location2.png"
import icon1 from "../../assest/img/icon/1.png"
import icon2 from "../../assest/img/icon/2.png"
import icon3 from "../../assest/img/icon/3.png"
import icon9 from "../../assest/img/icon/9.png"
import landy from "../../assest/images/property/lands/landy.jpg"
import author6 from "../../assest/images/author/author6.jpg"
import author7 from "../../assest/images/author/author7.jpg"
import author8 from "../../assest/images/author/author8.jpg"
import author3 from "../../assest/images/author/author3.jpg"
import stat from "../../assest/images/statistics/1.jpg"
import blog1 from "../../assest/images/blogs/blog1.jpg"
import blog2 from "../../assest/images/blogs/blog2.jpg"
import blog3 from "../../assest/images/blogs/blog3.jpg"
import video from "../../assest/images/video/1.jpg"

const PropertyDetails = () => {

	useEffect(()=>{
		const $ = window.$;

		$( 'body' ).addClass( 'body-bg' );
	},[])

	return(
		<div className="property-page-area pd-top-120 pd-bottom-90 ">
			  <div className="container">
			    <div className="property-details-top pd-bottom-70">
			      <div className="property-details-top-inner">
			        <div className="row">
			          <div className="col-lg-7">
			            <h3>Spacious Luxury</h3>
			            <p><img src={location} alt="img" /> Enugu 261, Sam Road, Right Side real estate </p>
			            <ul>
			              <li>3 Bedroom</li>
			              <li>Bathroom</li>
			              <li>1026 sqft</li>
			            </ul>
			          </div>
			          <div className="col-lg-5 text-lg-right">
			            <h4>33 BTC</h4>
			            <div className="btn-wrap">
			              <a className="btn btn-base btn-sm" href="#">BUILD</a>
			              <a className="btn btn-blue btn-sm" href="#">BUY</a>
			              <a className="btn btn-blue btn-sm" href="#">RENT</a>
			            </div>
			            <ul>
			              <li><img src={icon1} alt="img" />Marce 9 , 2020</li>
			              <li><img src={icon2} alt="img" />4263</li>
			              <li><img src={icon3} alt="img" />68</li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="product-thumbnail-wrapper">
			        <div className="single-thumbnail-slider">
			          <div className="slider-item">
			            <img src={landy} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={landy} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={landy} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={landy} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={landy} alt="img" />
			          </div>
			        </div>
			        <div className="product-thumbnail-carousel">
			          <div className="single-thumbnail-item">
					  <img src={landy} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
					  <img src={landy} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
					  <img src={landy} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
					  <img src={landy} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
					  <img src={landy} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
					  <img src={landy} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
					  <img src={landy} alt="img" />
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row go-top">
			      <div className="col-lg-8">
			        <div className="single-property-details-inner">
			          <h4>Daily Apartment</h4>
			          <p>Rare Development Opportunity _ 150+ years Family Heritage 27.5 of 55 contiguous acreage North of Jessup Rd / South of Hubble. 962 feet of Jessup Road frontage & 1488 feet of Hubble Rd frontage. 15 Minutes from downtown Cincinnati. Green Twp & Colerain Twp.</p>
			          <p>Peacefully nestled in the mountains of Kanu Desert,
								 and with spectacular views,
								  this 0.99 acre lot will be your playground year round! Upon entering. </p>
			          <div className="single-property-grid">
			            <h4>Poperty Details</h4>
			            <div className="row">
			              <div className="col-md-4">
			                <ul>
			                  <li>Bedrooms: 3</li>
			                  <li>All Rooms: 12</li>
			                  <li>Kitchen: 2</li>
			                  <li>Type: Privet House</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li>Bedrooms: 3</li>
			                  <li>Livingroom: 2</li>
			                  <li>Year Built: 2020</li>
			                  <li>Area: 1258</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li>Bedrooms: 3</li>
			                  <li>All Rooms: 12</li>
			                  <li>Kitchen: 2</li>
			                  <li>Type: Privet House</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="single-property-grid">
			            <h4>Amenities</h4>
			            <div className="row">
			              <div className="col-md-4">
			                <ul>
			                  <li><i className="fa fa-check" />Air Conditionar</li>
			                  <li><i className="fa fa-check" />Fencing</li>
			                  <li><i className="fa fa-check" />Internet</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li><i className="fa fa-check" />Wardrobes</li>
			                  <li><i className="fa fa-check" />School</li>
			                  <li><i className="fa fa-check" />Park</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li><i className="fa fa-check" />Dishwasher</li>
			                  <li><i className="fa fa-check" />Floor Covering</li>
			                  <li><i className="fa fa-check" />Internet</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="single-property-grid">
			            <h4>Additional Details</h4>
			            <div className="row">
			              <div className="col-md-4">
			                <ul>
			                  <li>Remodale Year: 3</li>
			                  <li>Amenites: Half of Fame</li>
			                  <li>Equepment: Grill-gass</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li>Diposit: 7065$</li>
			                  <li>Pool Size: 1620</li>
			                  <li>Additional Room: 2</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li>Ground: 2</li>
			                  <li>Additional Room: 2</li>
			                  <li>Floor: 1203</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="single-property-grid">
			            <h4>Proparty Attachment</h4>
			            <div className="row">
			              <div className="col-sm-6">
			                <a href="PDFLINK" download>
			                  <img src={icon9} alt="img" />
			                </a>
			              </div>
			              <div className="col-sm-6 mt-2 mt-sm-0">
			                <a href="PDFLINK" download>
			                  <img src={icon9} alt="img" />
			                </a>
			              </div>
			            </div>
			          </div>
			          <div className="single-property-grid">
			            <h4>Estate Location</h4>
			            <div className="property-map">
			              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
			            </div>
			          </div>
			          <div className="single-property-grid">
			            <h4>Floor Plans</h4>
			            <img src={landy} alt="img" />
			          </div>
			          <div className="single-property-grid">
			            <h4>Intro Video</h4>
			            <div className="property-video text-center" style={{background: `url(${video})`}}>
			              <a className="play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" aria-hidden="true" /></a>
			            </div>
			          </div>
			          <div className="single-property-grid">
			            <h4>Whats Nearby?</h4>
			            <div className="media single-review-inner">
			              <div className="media-left">
			                <div className="thumb">
			                  <img src={author6} alt="img" />
			                </div>
			              </div>
			              <div className="media-body align-self-center">
			                <div className="row">
			                  <div className="col-md-8">
			                    <h5>Eureka/Harvey Milk Branch</h5>
			                    <p>This is Awesome and Legit</p>
			                  </div>
			                  <div className="col-md-4 text-md-right">
			                    <p className="ratting-title"><span>32</span> Reviews</p>
			                    <div className="ratting-inner">
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="media single-review-inner">
			              <div className="media-left">
			                <div className="thumb">
			                  <img src={author7} alt="img" />
			                </div>
			              </div>
			              <div className="media-body align-self-center">
			                <div className="row">
			                  <div className="col-md-8">
			                    <h5>Milbaly Extension &amp; Academy</h5>
			                    <p>Honorably Wonderful</p>
			                  </div>
			                  <div className="col-md-4 text-md-right">
			                    <p className="ratting-title"><span>32</span> Reviews</p>
			                    <div className="ratting-inner">
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="media single-review-inner">
			              <div className="media-left">
			                <div className="thumb">
			                  <img src={author8} alt="img" />
			                </div>
			              </div>
			              <div className="media-body align-self-center">
			                <div className="row">
			                  <div className="col-md-8">
			                    <h5>Jane Orthom</h5>
			                    <p>Very Innovative</p>
			                  </div>
			                  <div className="col-md-4 text-md-right">
			                    <p className="ratting-title"><span>32</span> Reviews</p>
			                    <div className="ratting-inner">
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="single-property-grid">
			            <h4>Page statistics</h4>
			            <img src={stat} alt="img" />
			          </div>
			          <form className="single-property-comment-form">
			            <div className="single-property-grid bg-black">
			              <div className="single-property-form-title">
			                <div className="row">
			                  <div className="col-md-8">
			                    <h4>Post Your Comment</h4>
			                  </div>
			                  <div className="col-md-4 text-md-right">
			                    <div className="ratting-inner">
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                      <i className="fa fa-star" />
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="row">
			                <div className="col-lg-6">
			                  <label className="single-input-inner style-bg">
			                    <span className="label">Enter Your Name</span>
			                    <input type="text" placeholder="Your name here...." />
			                  </label>
			                </div>
			                <div className="col-lg-6">
			                  <label className="single-input-inner style-bg">
			                    <span className="label">Enter Your MAil</span>
			                    <input type="text" placeholder="Your email here...." />
			                  </label>
			                </div>
			                <div className="col-12">
			                  <label className="single-input-inner style-bg">
			                    <span className="label">Enter Your Messege</span>
			                    <textarea placeholder="Enter your messege here...." defaultValue={""} />
			                  </label>
			                </div>
			                <div className="col-12 mb-4">
			                  <button className="btn btn-base radius-btn">Submit Now</button>
			                </div>
			              </div>
			            </div>
			          </form>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <aside className="sidebar-area">
			          <div className="widget widget-author text-center">
			            <h4 className="widget-title">About Me</h4>
			            <div className="thumb">
			              <img src={author3} alt="img" />
			            </div> 
			            <div className="details">
			              <h5>Juliet Okafor</h5>
			              <p>An Epic ENtrepreneur</p>
			              <ul>
			                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
			              </ul>
			            </div>        
			          </div>
			          <div className="widget widget-category">
			            <h5 className="widget-title">Category</h5>
			            <ul>
			              <li><a href="#">Design <span>26</span></a></li>
			              <li><a href="#">Villa House <span>20</span></a></li>
			              <li><a href="#">Business <span>21</span></a></li>
			              <li><a href="#">Global World <span>31</span></a></li>
			              <li><a href="#">Technology <span>12</span></a></li>
			              <li><a href="#">Ui Design <span>12</span></a></li>
			            </ul>
			          </div>
			          <div className="widget widget-place">
			            <h5 className="widget-title">Place</h5>
			            <ul>
			              <li>New York <span>26</span></li>
			              <li>Love Road <span>20</span></li>
			              <li>Beach Side <span>21</span></li>
			              <li>Golden city <span>31</span></li>
			            </ul>
			          </div>
			          <div className="widget widget-news">
			            <h5 className="widget-title">Popular Feeds</h5>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={blog1} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6><Link to="/blog-details">Dolor eorem ipsum sit amet Lorem ipsum</Link></h6>
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={blog2} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6><Link to="/blog-details">Responsive Web And Desktop Develope</Link></h6>
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={blog3} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6><Link to="/blog-details">Admin Web is Django Highlig Models</Link></h6>
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			              </div>
			            </div>
			          </div>
			          <div className="widget widget-tags">
			            <h5 className="widget-title">Popular Tags</h5>
			            <div className="tagcloud">
			              <Link to="/blog">Popular</Link>
			              <Link to="/blog">Art</Link>
			              <Link to="/blog">Business</Link>
			              <Link to="/blog">Design</Link>
			              <Link to="/blog">Creator</Link>
			              <Link to="/blog">CSS</Link>
			              <Link to="/blog">Planing</Link>
			              <Link to="/blog">Creative</Link>
			            </div>   
			          </div>
			        </aside>
			      </div>
			    </div>
			  </div>
			</div>
	)
}

// class PropertyDetails extends Component {

// 	componentDidMount() {

//      const $ = window.$;

//      $( 'body' ).addClass( 'body-bg' );

//  	}

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="property-page-area pd-top-120 pd-bottom-90 ">
// 			  <div className="container">
// 			    <div className="property-details-top pd-bottom-70">
// 			      <div className="property-details-top-inner">
// 			        <div className="row">
// 			          <div className="col-lg-7">
// 			            <h3>Spacious Luxury</h3>
// 			            <p><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> Enugu 261, Sam Road, Right Side real estate </p>
// 			            <ul>
// 			              <li>3 Bedroom</li>
// 			              <li>Bathroom</li>
// 			              <li>1026 sqft</li>
// 			            </ul>
// 			          </div>
// 			          <div className="col-lg-5 text-lg-right">
// 			            <h4>33 BTC</h4>
// 			            <div className="btn-wrap">
// 			              <a className="btn btn-base btn-sm" href="#">BUILD</a>
// 			              <a className="btn btn-blue btn-sm" href="#">BUY</a>
// 			              <a className="btn btn-blue btn-sm" href="#">RENT</a>
// 			            </div>
// 			            <ul>
// 			              <li><img src={publicUrl+"assets/img/icon/1.png"} alt="img" />Marce 9 , 2020</li>
// 			              <li><img src={publicUrl+"assets/img/icon/2.png"} alt="img" />4263</li>
// 			              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" />68</li>
// 			            </ul>
// 			          </div>
// 			        </div>
// 			      </div>
// 			      <div className="product-thumbnail-wrapper">
// 			        <div className="single-thumbnail-slider">
// 			          <div className="slider-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="slider-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="slider-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="slider-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="slider-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			        </div>
// 			        <div className="product-thumbnail-carousel">
// 			          <div className="single-thumbnail-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="single-thumbnail-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="single-thumbnail-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="single-thumbnail-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="single-thumbnail-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="single-thumbnail-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="single-thumbnail-item">
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			        </div>
// 			      </div>
// 			    </div>
// 			    <div className="row go-top">
// 			      <div className="col-lg-8">
// 			        <div className="single-property-details-inner">
// 			          <h4>Daily Apartment</h4>
// 			          <p>Rare Development Opportunity _ 150+ years Family Heritage 27.5 of 55 contiguous acreage North of Jessup Rd / South of Hubble. 962 feet of Jessup Road frontage & 1488 feet of Hubble Rd frontage. 15 Minutes from downtown Cincinnati. Green Twp & Colerain Twp.</p>
// 			          <p>Peacefully nestled in the mountains of Kanu Desert,
// 								 and with spectacular views,
// 								  this 0.99 acre lot will be your playground year round! Upon entering. </p>
// 			          <div className="single-property-grid">
// 			            <h4>Poperty Details</h4>
// 			            <div className="row">
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li>Bedrooms: 3</li>
// 			                  <li>All Rooms: 12</li>
// 			                  <li>Kitchen: 2</li>
// 			                  <li>Type: Privet House</li>
// 			                </ul>
// 			              </div>
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li>Bedrooms: 3</li>
// 			                  <li>Livingroom: 2</li>
// 			                  <li>Year Built: 2020</li>
// 			                  <li>Area: 1258</li>
// 			                </ul>
// 			              </div>
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li>Bedrooms: 3</li>
// 			                  <li>All Rooms: 12</li>
// 			                  <li>Kitchen: 2</li>
// 			                  <li>Type: Privet House</li>
// 			                </ul>
// 			              </div>
// 			            </div>
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Amenities</h4>
// 			            <div className="row">
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li><i className="fa fa-check" />Air Conditionar</li>
// 			                  <li><i className="fa fa-check" />Fencing</li>
// 			                  <li><i className="fa fa-check" />Internet</li>
// 			                </ul>
// 			              </div>
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li><i className="fa fa-check" />Wardrobes</li>
// 			                  <li><i className="fa fa-check" />School</li>
// 			                  <li><i className="fa fa-check" />Park</li>
// 			                </ul>
// 			              </div>
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li><i className="fa fa-check" />Dishwasher</li>
// 			                  <li><i className="fa fa-check" />Floor Covering</li>
// 			                  <li><i className="fa fa-check" />Internet</li>
// 			                </ul>
// 			              </div>
// 			            </div>
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Additional Details</h4>
// 			            <div className="row">
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li>Remodale Year: 3</li>
// 			                  <li>Amenites: Half of Fame</li>
// 			                  <li>Equepment: Grill-gass</li>
// 			                </ul>
// 			              </div>
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li>Diposit: 7065$</li>
// 			                  <li>Pool Size: 1620</li>
// 			                  <li>Additional Room: 2</li>
// 			                </ul>
// 			              </div>
// 			              <div className="col-md-4">
// 			                <ul>
// 			                  <li>Ground: 2</li>
// 			                  <li>Additional Room: 2</li>
// 			                  <li>Floor: 1203</li>
// 			                </ul>
// 			              </div>
// 			            </div>
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Proparty Attachment</h4>
// 			            <div className="row">
// 			              <div className="col-sm-6">
// 			                <a href="PDFLINK" download>
// 			                  <img src={publicUrl+"assets/img/icon/9.png"} alt="img" />
// 			                </a>
// 			              </div>
// 			              <div className="col-sm-6 mt-2 mt-sm-0">
// 			                <a href="PDFLINK" download>
// 			                  <img src={publicUrl+"assets/img/icon/9.png"} alt="img" />
// 			                </a>
// 			              </div>
// 			            </div>
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Estate Location</h4>
// 			            <div className="property-map">
// 			              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
// 			            </div>
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Floor Plans</h4>
// 			            <img src={publicUrl+"assets/images/property/lands/landy.jpg"} alt="img" />
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Intro Video</h4>
// 			            <div className="property-video text-center" style={{background: 'url('+publicUrl+'assets/images/video/1.jpg)'}}>
// 			              <a className="play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" aria-hidden="true" /></a>
// 			            </div>
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Whats Nearby?</h4>
// 			            <div className="media single-review-inner">
// 			              <div className="media-left">
// 			                <div className="thumb">
// 			                  <img src={publicUrl+"assets/images/author/author6.jpg"} alt="img" />
// 			                </div>
// 			              </div>
// 			              <div className="media-body align-self-center">
// 			                <div className="row">
// 			                  <div className="col-md-8">
// 			                    <h5>Eureka/Harvey Milk Branch</h5>
// 			                    <p>This is Awesome and Legit</p>
// 			                  </div>
// 			                  <div className="col-md-4 text-md-right">
// 			                    <p className="ratting-title"><span>32</span> Reviews</p>
// 			                    <div className="ratting-inner">
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                    </div>
// 			                  </div>
// 			                </div>
// 			              </div>
// 			            </div>
// 			            <div className="media single-review-inner">
// 			              <div className="media-left">
// 			                <div className="thumb">
// 			                  <img src={publicUrl+"assets/images/author/author7.jpg"} alt="img" />
// 			                </div>
// 			              </div>
// 			              <div className="media-body align-self-center">
// 			                <div className="row">
// 			                  <div className="col-md-8">
// 			                    <h5>Milbaly Extension &amp; Academy</h5>
// 			                    <p>Honorably Wonderful</p>
// 			                  </div>
// 			                  <div className="col-md-4 text-md-right">
// 			                    <p className="ratting-title"><span>32</span> Reviews</p>
// 			                    <div className="ratting-inner">
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                    </div>
// 			                  </div>
// 			                </div>
// 			              </div>
// 			            </div>
// 			            <div className="media single-review-inner">
// 			              <div className="media-left">
// 			                <div className="thumb">
// 			                  <img src={publicUrl+"assets/images/author/author8.jpg"} alt="img" />
// 			                </div>
// 			              </div>
// 			              <div className="media-body align-self-center">
// 			                <div className="row">
// 			                  <div className="col-md-8">
// 			                    <h5>Jane Orthom</h5>
// 			                    <p>Very Innovative</p>
// 			                  </div>
// 			                  <div className="col-md-4 text-md-right">
// 			                    <p className="ratting-title"><span>32</span> Reviews</p>
// 			                    <div className="ratting-inner">
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                    </div>
// 			                  </div>
// 			                </div>
// 			              </div>
// 			            </div>
// 			          </div>
// 			          <div className="single-property-grid">
// 			            <h4>Page statistics</h4>
// 			            <img src={publicUrl+"assets/images/statistics/1.jpg"} alt="img" />
// 			          </div>
// 			          <form className="single-property-comment-form">
// 			            <div className="single-property-grid bg-black">
// 			              <div className="single-property-form-title">
// 			                <div className="row">
// 			                  <div className="col-md-8">
// 			                    <h4>Post Your Comment</h4>
// 			                  </div>
// 			                  <div className="col-md-4 text-md-right">
// 			                    <div className="ratting-inner">
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                      <i className="fa fa-star" />
// 			                    </div>
// 			                  </div>
// 			                </div>
// 			              </div>
// 			              <div className="row">
// 			                <div className="col-lg-6">
// 			                  <label className="single-input-inner style-bg">
// 			                    <span className="label">Enter Your Name</span>
// 			                    <input type="text" placeholder="Your name here...." />
// 			                  </label>
// 			                </div>
// 			                <div className="col-lg-6">
// 			                  <label className="single-input-inner style-bg">
// 			                    <span className="label">Enter Your MAil</span>
// 			                    <input type="text" placeholder="Your email here...." />
// 			                  </label>
// 			                </div>
// 			                <div className="col-12">
// 			                  <label className="single-input-inner style-bg">
// 			                    <span className="label">Enter Your Messege</span>
// 			                    <textarea placeholder="Enter your messege here...." defaultValue={""} />
// 			                  </label>
// 			                </div>
// 			                <div className="col-12 mb-4">
// 			                  <button className="btn btn-base radius-btn">Submit Now</button>
// 			                </div>
// 			              </div>
// 			            </div>
// 			          </form>
// 			        </div>
// 			      </div>
// 			      <div className="col-lg-4">
// 			        <aside className="sidebar-area">
// 			          <div className="widget widget-author text-center">
// 			            <h4 className="widget-title">About Me</h4>
// 			            <div className="thumb">
// 			              <img src={publicUrl+"assets/images/author/author3.jpg"} alt="img" />
// 			            </div> 
// 			            <div className="details">
// 			              <h5>Juliet Okafor</h5>
// 			              <p>An Epic ENtrepreneur</p>
// 			              <ul>
// 			                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
// 			                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
// 			                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
// 			                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
// 			              </ul>
// 			            </div>        
// 			          </div>
// 			          <div className="widget widget-category">
// 			            <h5 className="widget-title">Category</h5>
// 			            <ul>
// 			              <li><a href="#">Design <span>26</span></a></li>
// 			              <li><a href="#">Villa House <span>20</span></a></li>
// 			              <li><a href="#">Business <span>21</span></a></li>
// 			              <li><a href="#">Global World <span>31</span></a></li>
// 			              <li><a href="#">Technology <span>12</span></a></li>
// 			              <li><a href="#">Ui Design <span>12</span></a></li>
// 			            </ul>
// 			          </div>
// 			          <div className="widget widget-place">
// 			            <h5 className="widget-title">Place</h5>
// 			            <ul>
// 			              <li>New York <span>26</span></li>
// 			              <li>Love Road <span>20</span></li>
// 			              <li>Beach Side <span>21</span></li>
// 			              <li>Golden city <span>31</span></li>
// 			            </ul>
// 			          </div>
// 			          <div className="widget widget-news">
// 			            <h5 className="widget-title">Popular Feeds</h5>
// 			            <div className="single-news-wrap media">
// 			              <div className="thumb">
// 			                <img src={publicUrl+"assets/images/blogs/blog1.jpg"} alt="img" />
// 			              </div>
// 			              <div className="media-body align-self-center">
// 			                <h6><Link to="/blog-details">Dolor eorem ipsum sit amet Lorem ipsum</Link></h6>
// 			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
// 			              </div>
// 			            </div>
// 			            <div className="single-news-wrap media">
// 			              <div className="thumb">
// 			                <img src={publicUrl+"assets/images/blogs/blog2.jpg"} alt="img" />
// 			              </div>
// 			              <div className="media-body align-self-center">
// 			                <h6><Link to="/blog-details">Responsive Web And Desktop Develope</Link></h6>
// 			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
// 			              </div>
// 			            </div>
// 			            <div className="single-news-wrap media">
// 			              <div className="thumb">
// 			                <img src={publicUrl+"assets/images/blogs/blog3.jpg"} alt="img" />
// 			              </div>
// 			              <div className="media-body align-self-center">
// 			                <h6><Link to="/blog-details">Admin Web is Django Highlig Models</Link></h6>
// 			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
// 			              </div>
// 			            </div>
// 			          </div>
// 			          <div className="widget widget-tags">
// 			            <h5 className="widget-title">Popular Tags</h5>
// 			            <div className="tagcloud">
// 			              <Link to="/blog">Popular</Link>
// 			              <Link to="/blog">Art</Link>
// 			              <Link to="/blog">Business</Link>
// 			              <Link to="/blog">Design</Link>
// 			              <Link to="/blog">Creator</Link>
// 			              <Link to="/blog">CSS</Link>
// 			              <Link to="/blog">Planing</Link>
// 			              <Link to="/blog">Creative</Link>
// 			            </div>   
// 			          </div>
// 			        </aside>
// 			      </div>
// 			    </div>
// 			  </div>
// 			</div>

//         }
// }

export default PropertyDetails
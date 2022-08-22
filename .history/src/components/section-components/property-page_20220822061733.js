import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PropertyPage extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'body-bg' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="blog-page-area pd-top-120 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8">
			        <div className="product-search-inner bg-main">
			          <div className="row custom-gutters-20">
			            <div className="col-md-3 align-self-center">
			              <h5>21 Properties</h5>
			            </div>
			            <div className="col-md-6 mt-2 mt-md-0">
			              <div className="widget-search">
			                <div className="single-search-inner">
			                  <input type="text" placeholder="Search your keyword" />
			                  <button><i className="la la-search" /></button>
			                </div>
			              </div>
			            </div>
			            <div className="col-md-3 mt-2 mt-md-0 align-self-center">
			              <div className="single-select-inner">
			                <select>
			                  <option value={1}>Sort By</option>
			                  <option value={2}>Sort By</option>
			                  <option value={3}>Sort By</option>
			                </select>
			              </div>
			            </div>
			          </div>
			        </div>                  
			        <div className="row">
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/1.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Daily Apartment</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>Zahari Properties is a real estate firm in Lagos with collections of real estate properties for sale, rent, lease, shortlet or for a virtual office. </p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/2.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author1.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Family House</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>Aimart Realtors constantly works towards property insurance.</p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/3.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Beach House</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>Demola Adetola & Co is a company of real chartered estate surveyors and valuers offering services in this areas.</p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/4.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Hotel Apartment</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>I.N.J Real Estate Company is one of the estate agents, property managers, investment advisers, real estate consultant, building developers in Oniru Lagos.</p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/5.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Daily Apartment</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png" }alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>Nigeria's real estate company. we undertake constructions and sale of properties as well as cater to every class of the economy.</p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/6.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Villa House</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>Meritabode Nigeria Limited is real estate company that is passionate about making a positive difference in the real estate industry. </p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/7.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Sunshine Place</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>MTS Property Development Company is one of the leading real estate firm in Lagos.</p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="single-product-wrap style-2">
			              <div className="thumb">
			                <img src={publicUrl+"assets/images/property/8.jpg"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/images/author/author1.jpg"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property-details">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Sunny Place</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property-details">For Sell</Link></li>
			                </ul>
			                <p>Property Mart is one of the leading estate developers & property management based in Lagos </p>
			                <span className="price">₦ 8,000,650.00</span>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			        </div>
			        <div className="pagination-area text-center mt-4">
			          <ul className="pagination">
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
			            <li className="page-item active"><a className="page-link" href="#">1</a></li>
			            <li className="page-item"><a className="page-link" href="#">2</a></li>
			            <li className="page-item"><a className="page-link" href="#">3</a></li>
			            <li className="page-item"><a className="page-link" href="#">...</a></li>
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
			          </ul>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <aside className="sidebar-area">
			          <div className="widget widget-author text-center">
			            <h4 className="widget-title">About Me</h4>
			            <div className="thumb">
			              <img src={publicUrl+"assets/images/author/author3.jpg"} alt="img" />
			            </div> 
			            <div className="details">
			              <h5>Judith Okafor</h5>
			              <p>A professional, transparent and reliable real estate agency focused on the sales and leasing of luxury properties in Nigeria</p>
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
			                <img src={publicUrl+"assets/images/author/author3.jpg"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6><Link to="/blog-details">Aimart Realtors constantly works towards property insurance.</Link></h6>
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/blog/6.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6><Link to="/blog-details">I.N.J Real Estate Company is one of the estate agents, property managers.</Link></h6>
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/blog/7.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6><Link to="/blog-details">MTS Property Development Company is one of the leading real estate firm in Lagos.</Link></h6>
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
        }
}

export default PropertyPage
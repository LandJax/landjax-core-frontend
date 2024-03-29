import React from 'react';
import { Link } from 'react-router-dom';
import png3 from'../../assest/images/3.png'
import author from'../../assest/images/author/author2.jpg'
import alt from '../../assest/img/icon/location-alt.png'
import triangle from "../../assest/img/icon/triangle.png"
import bed from "../../assest/img/icon/bed.png"
import wall from "../../assest/img/icon/wall.png"

const Product = () => {
	
	return(
		<div className="product-area pd-top-118 pd-bottom-90 go-top">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>We are offering the best Houses</h6>
			      <h2>Best Lands For You</h2>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={png3} alt="img" />
			            <Link className="cat" to="/property-details">For Sell</Link>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="author">
			                <img src={author} alt="img" />                                    
			              </div>
			              <div className="media-body">
			                <h6><Link to="/property">JohnSon Nnamani</Link></h6>
			                <p><img src={alt} alt="img" />Enugu real estate </p>
			              </div>
			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			            </div>
			            <div className="product-meta">
			              <span className="price"> 80 BTC</span>
			              <div className="float-right d-inline-block">
			                <ul>
			                  <li><img src={triangle} alt="img" />2</li>
			                  <li><img src={bed} alt="img" />3</li>
			                  <li><img src={wall} alt="img" />1026 sq ft</li>
			                </ul>
			              </div>
			            </div>
			          </div>          
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={png3} alt="img" />
			            <Link className="cat" to="/property-details">For Sell</Link>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="author">
			                <img src={author} alt="img" />                                    
			              </div>
			              <div className="media-body">
			                <h6><Link to="/property">JohnSon Nnamani</Link></h6>
			                <p><img src={alt} alt="img" />Enugu real estate </p>
			              </div>
			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			            </div>
			            <div className="product-meta">
			              <span className="price">80 BTC</span>
			              <div className="float-right d-inline-block">
			                <ul>
			                  <li><img src={triangle} alt="img" />2</li>
			                  <li><img src={bed} alt="img" />3</li>
			                  <li><img src={wall} alt="img" />1026 sq ft</li>
			                </ul>
			              </div>
			            </div>
			          </div>          
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={png3} alt="img" />
			            <Link className="cat" to="/property-details">For Sell</Link>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="author">
			                <img src={author} alt="img" />                                    
			              </div>
			              <div className="media-body">
			                <h6><Link to="/property">JohnSon Nnamani</Link></h6>
			                <p><img src={alt} alt="img" />Enugu real estate </p>
			              </div>
			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			            </div>
			            <div className="product-meta">
			              <span className="price"> 80 BTC</span>
			              <div className="float-right d-inline-block">
			                <ul>
			                  <li><img src={triangle} alt="img" />2</li>
			                  <li><img src={bed} alt="img" />3</li>
			                  <li><img src={wall} alt="img" />1026 sq ft</li>
			                </ul>
			              </div>
			            </div>
			          </div>          
			        </div>
			      </div>     
			    </div>
			  </div>
			</div>
	)
}

// class Product extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return  <div className="product-area pd-top-118 pd-bottom-90 go-top">
// 			  <div className="container">
// 			    <div className="section-title text-center">
// 			      <h6>We are offering the best Houses</h6>
// 			      <h2>Best Lands For You</h2>
// 			    </div>
// 			    <div className="row justify-content-center">
// 			      <div className="col-lg-4 col-md-6">
// 			        <div className="single-product-wrap">
// 			          <div className="thumb">
// 			            <img src={publicUrl+"assets/images/3.png"} alt="img" />
// 			            <Link className="cat" to="/property-details">For Sell</Link>
// 			          </div>
// 			          <div className="product-wrap-details">
// 			            <div className="media">
// 			              <div className="author">
// 			                <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />                                    
// 			              </div>
// 			              <div className="media-body">
// 			                <h6><Link to="/property">JohnSon Nnamani</Link></h6>
// 			                <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />Enugu real estate </p>
// 			              </div>
// 			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
// 			            </div>
// 			            <div className="product-meta">
// 			              <span className="price"> 80 BTC</span>
// 			              <div className="float-right d-inline-block">
// 			                <ul>
// 			                  <li><img src={publicUrl+"assets/img/icon/triangle.png"} alt="img" />2</li>
// 			                  <li><img src={publicUrl+"assets/img/icon/bed.png"} alt="img" />3</li>
// 			                  <li><img src={publicUrl+"assets/img/icon/wall.png"} alt="img" />1026 sq ft</li>
// 			                </ul>
// 			              </div>
// 			            </div>
// 			          </div>          
// 			        </div>
// 			      </div>
// 			      <div className="col-lg-4 col-md-6">
// 			        <div className="single-product-wrap">
// 			          <div className="thumb">
// 			            <img src={publicUrl+"assets/images/3.png"} alt="img" />
// 			            <Link className="cat" to="/property-details">For Sell</Link>
// 			          </div>
// 			          <div className="product-wrap-details">
// 			            <div className="media">
// 			              <div className="author">
// 			                <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />                                    
// 			              </div>
// 			              <div className="media-body">
// 			                <h6><Link to="/property">JohnSon Nnamani</Link></h6>
// 			                <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />Enugu real estate </p>
// 			              </div>
// 			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
// 			            </div>
// 			            <div className="product-meta">
// 			              <span className="price">80 BTC</span>
// 			              <div className="float-right d-inline-block">
// 			                <ul>
// 			                  <li><img src={publicUrl+"assets/img/icon/triangle.png"} alt="img" />2</li>
// 			                  <li><img src={publicUrl+"assets/img/icon/bed.png"} alt="img" />3</li>
// 			                  <li><img src={publicUrl+"assets/img/icon/wall.png"} alt="img" />1026 sq ft</li>
// 			                </ul>
// 			              </div>
// 			            </div>
// 			          </div>          
// 			        </div>
// 			      </div>
// 			      <div className="col-lg-4 col-md-6">
// 			        <div className="single-product-wrap">
// 			          <div className="thumb">
// 			            <img src={publicUrl+"assets/images/3.png"} alt="img" />
// 			            <Link className="cat" to="/property-details">For Sell</Link>
// 			          </div>
// 			          <div className="product-wrap-details">
// 			            <div className="media">
// 			              <div className="author">
// 			                <img src={publicUrl+"assets/images/author/author2.jpg"} alt="img" />                                    
// 			              </div>
// 			              <div className="media-body">
// 			                <h6><Link to="/property">JohnSon Nnamani</Link></h6>
// 			                <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />Enugu real estate </p>
// 			              </div>
// 			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
// 			            </div>
// 			            <div className="product-meta">
// 			              <span className="price"> 80 BTC</span>
// 			              <div className="float-right d-inline-block">
// 			                <ul>
// 			                  <li><img src={publicUrl+"assets/img/icon/triangle.png"} alt="img" />2</li>
// 			                  <li><img src={publicUrl+"assets/img/icon/bed.png"} alt="img" />3</li>
// 			                  <li><img src={publicUrl+"assets/img/icon/wall.png"} alt="img" />1026 sq ft</li>
// 			                </ul>
// 			              </div>
// 			            </div>
// 			          </div>          
// 			        </div>
// 			      </div>     
// 			    </div>
// 			  </div>
// 			</div>

//         }
// }

export default Product
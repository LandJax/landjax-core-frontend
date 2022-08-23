import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="product-area pd-top-118 pd-bottom-90 go-top">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>We are offring the best lands and houses</h6>
			      <h2>Popular categories</h2>
			    </div>
			    <div className="row">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-category-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/images/6.jpg"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property-details">Orchard</Link></h4>
			            <Link className="btn btn-base" to="/property">2 Properties</Link>
			          </div>
			        </div>
			      </div>  
			      <div className="col-lg-4 col-md-6">
			        <div className="single-category-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/images/6.jpg"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property-details">Nike Cottage</Link></h4>
			            <Link className="btn btn-base" to="/property">6 Properties</Link>
			          </div>
			        </div>
			      </div> 
			      <div className="col-lg-4 col-md-6">
			        <div className="single-category-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/images/6.jpg"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property-details">Achara Barn</Link></h4>
			            <Link className="btn btn-base" to="/property">2 Properties</Link>
			          </div>
			        </div>
			      </div>   
			      <div className="col-lg-4 col-md-6 order-lg-12">
			        <div className="single-category-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/images/9.jpg"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property-details">Family House</Link></h4>
			            <Link className="btn btn-base" to="/property">1 Properties</Link>
			          </div>
			        </div>
			      </div> 
			      <div className="col-lg-8 order-lg-1">
			        <div className="single-category-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/images/27.png"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property-details">Square Kilometers</Link></h4>
			            <Link className="btn btn-base" to="/property">7 Porparties</Link>
			          </div>
			        </div>
			      </div>   
			    </div>
			  </div>
			</div>

        }
}

export default ProductV2
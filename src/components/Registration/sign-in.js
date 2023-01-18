import React, { useEffect } from 'react';

const SignIn = () => {

	useEffect(()=>{
		const $ = window.$;

 $( 'body' ).addClass( 'bg-gray' );
	},[])
	
	return(
		<div className="signin-page-area pd-top-100 ">
			  <div className="container">
			    <div className="row justify-content-center">

			      <div className="col-xl-6 col-lg-7">
			        <form className="signin-inner">
			          <div className="row">
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Name" />
			              </label>
			            </div>
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Email" />
			              </label>
			            </div>
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Password" />
			              </label>
			            </div>
			            <div className="col-12 mb-4">
			              <button className="btn btn-base w-100">Sign In</button>
			            </div>
			            <div className="col-12">
			              <a href="#">Forgotten Your Password?. </a>
			              <a href="signup.html"><strong>Signup</strong></a>
			            </div>
			          </div>
			        </form>
			      </div>

			    </div>
			  </div>
			</div>
	)
}

export default SignIn
import React, { useEffect } from 'react';
import logo from "./asserts/logo.png"
import "./Css/style.css"
import { FaFacebook } from 'react-icons/fa'

const SignIn = () => {

	useEffect(() => {
		const $ = window.$;

		$('body').addClass('bg-gray');
	}, [])

	return (
		<div className="signup-page-area pd-top-100" style={{ marginTop: 0, paddingTop: 0, }}>
			<div className="" style={{ backgroundColor: "#1C0335", }}>
				<div className="row justify-content-center mx-0" >

					<div className="d-none d-xl-block col-xl-6 col-lg-6 p-0 " id='house_section'>

						<div className="">
							<img src={logo} alt="" className='pt-4 px-4' />
						</div>

						<div className="text-section" >
							<div className=''>
								<h1>Creation of Wealth Start here</h1>
								<p>Our community gives you the platform to sell and buy properties
									in different currency .</p>
							</div>
						</div>


					</div>


					<div className="col-12 col-xl-6 col-lg-6" style={{ backgroundColor: "#1C0335" }} >

						<div className='mt-5 text-center'>
							<h1 style={{ fontSize: 35, fontWeight: 800, color: 'white' }}>Login</h1>


							<div className='d-flex justify-content-center' >
								<button className="d-flex justify-content-center" style={{ width: "70%", backgroundColor: "#CFE2FC", borderRadius: 10, padding: "5px 0px" }}>
									<FaFacebook size={20} />

									<span style={{ fontSize: "15px", fontWeight: "700", padding: "0 20px" }}>Join using Facebook</span>

								</button>
							</div>
							<p className='mt-3 text-light'> OR </p>

						</div>



						<form className="signin-inner" style={{ backgroundColor: "#1C0335", margin: 0, width: '100%' }}>
							<div className='d-xl-flex flex-column justify-content-center align-items-center ' >
								<div className="row">


									<div className="col-xl-11 mx-xl-2 mx-xl-1">
										<span className='text-light'>Email</span>
										<label className="single-input-inner style-bg-border">

											<input type="text" placeholder="" style={{ width: "100%", backgroundColor: "#1C0335", color: "white" }} />
										</label>
									</div>



									<div className="col-xl-11 mx-xl-2 mx-xl-1">
										<label className="single-input-inner style-bg-border">

											<div className='d-xl-flex justify-content-xl-between '>
												<p > <span className='text-light'>Password</span> <span>(min 8 char)</span> </p>
												<p className='text-light'><a href="">Forgot Password?</a></p> 
											</div>

											<input type="text" placeholder="" style={{ width: "100%", backgroundColor: "#1C0335", color: "white" }} />
										</label>
									</div>

									<div className="col-xl-11 mx-xl-2 mx-xl-1 mb-4 ">
										<button className="btn btn-base w-100  ">Join</button>
									</div>
									<div className="col-12 text-center" style={{ fontSize: 12 }}>
										<span>By joining <span className='text-light'>Landjax</span> community you agree to the terms and privacy  </span>

									</div>

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
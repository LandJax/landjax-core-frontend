import React, { useEffect } from 'react';
import bg_img from "./asserts/bg-img.png"
import logo from "./asserts/logo.png"
import "./Css/style.css"

const SignUp = () => {
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
							<h1 style={{fontSize:35,fontWeight:800,color:'white'}}>Join Landjax</h1>

							<p className='text-light'>Already have an account? <a href="" className='text-primary'>Login</a></p>
							
							<div className=" ">
									<button style={{width:"70%"}}>Join</button>
								</div>
						</div>
						<form className="signin-inner" style={{ backgroundColor: "#1C0335", margin: 0, }}>
							<div className="row">

								<div className='row mx-xl-2 mx-1'>
									<div className="col-12 col-xl-6 col-lg-6">
										<label className="single-input-inner style-bg-border">
											<span className='text-light'>First Name</span>
											<input type="text" placeholder="" style={{width:"100%",backgroundColor:"#1C0335",color:"white"}} />
										</label>
									</div>

									<div className="col-12 col-xl-5 col-lg-6">
										<label className="single-input-inner style-bg-border">
										<span className='text-light'>Last Name</span>
											<input type="text" placeholder="" style={{width:"100%",backgroundColor:"#1C0335",color:"white"}} />
										</label>
									</div>
								</div>

								<div className="col-xl-11 mx-xl-2 mx-1">
								<span className='text-light'>Email</span>
									<label className="single-input-inner style-bg-border">

										<input type="text" placeholder="" style={{width:"100%",backgroundColor:"#1C0335",color:"white"}}	 />
									</label>
								</div>

								<div className="col-xl-11 mx-xl-2 mx-1">
									<label className="single-input-inner style-bg-border">
									<span > <span className='text-light'>Username</span> <span>( only letters, numbers, and underscores)</span> </span>

										<input type="text" placeholder="" style={{width:"100%",backgroundColor:"#1C0335",color:"white"}} />
									</label>
								</div>

								<div className="col-xl-11 mx-xl-2 mx-1">
									<label className="single-input-inner style-bg-border">
									<span > <span className='text-light'>Password</span> <span>(min 8 char)</span> </span>
										<input type="text" placeholder="" style={{width:"100%",backgroundColor:"#1C0335",color:"white"}} />
									</label>
								</div>
								
								<div className="col-xl-11 mx-xl-2 mx-1 mb-4 ">
									<button className="btn btn-base w-100  ">Join</button>
								</div>
								<div className="col-12 text-center" style={{fontSize:12}}>
									<span>By joining <span className='text-light'>Landjax</span> community you agree to the terms and privacy  </span>
								
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

// class SignUp extends Component {

// 	componentDidMount() {

//      const $ = window.$;

//      $( 'body' ).addClass( 'bg-gray' );

//  	}

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <div className="signup-page-area pd-top-100">
// 			  <div className="container">
// 			    <div className="row justify-content-center">
// 			      <div className="col-xl-6 col-lg-7">
// 			        <form className="signin-inner">
// 			          <div className="row">
// 			            <div className="col-12">
// 			              <label className="single-input-inner style-bg-border">
// 			                <input type="text" placeholder="First Name" />
// 			              </label>
// 			            </div>
// 			            <div className="col-12">
// 			              <label className="single-input-inner style-bg-border">
// 			                <input type="text" placeholder="Last Name" />
// 			              </label>
// 			            </div>
// 			            <div className="col-12">
// 			              <label className="single-input-inner style-bg-border">
// 			                <input type="text" placeholder="Email" />
// 			              </label>
// 			            </div>
// 			            <div className="col-12">
// 			              <label className="single-input-inner style-bg-border">
// 			                <input type="text" placeholder="Password" />
// 			              </label>
// 			            </div>
// 			            <div className="col-12">
// 			              <label className="single-input-inner style-bg-border">
// 			                <input type="text" placeholder="Confirm Password" />
// 			              </label>
// 			            </div>
// 			            <div className="col-12 mb-4">
// 			              <button className="btn btn-base w-100">Create Account</button>
// 			            </div>
// 			            <div className="col-12">
// 			              <span>By creating an account </span>
// 			              <a href="signin.html"><strong>Signin</strong></a>
// 			            </div>
// 			          </div>
// 			        </form>
// 			      </div>
// 			    </div>
// 			  </div>
// 			</div>

//         }
// }

export default SignUp
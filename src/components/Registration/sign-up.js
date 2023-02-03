import React, { useEffect } from 'react';
import bg_img from "./asserts/bg-img.png"
import logo from "./asserts/logo.png"
import "./Css/style.css"
import { FaFacebook } from 'react-icons/fa'
import CustomField from '../UI/CustomField';
import Custombutton from '../UI/Custombutton';

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
							<h1 style={{ fontSize: 35, fontWeight: 800, color: 'white' }}>Join Landjax</h1>

							<p className='text-light'>Already have an account? <a href="" className='text-primary'>Login</a></p>
							
							<div className='d-flex justify-content-center  mx-5' >

								<Custombutton text={'Join using Facebook'} className={'btn btn-base w-100'} buttonColor={'#CFE2FC'} icon={'facebook'} />
							</div>
							<p className='mt-3 text-light'> OR </p>

						</div>



						<form className="signin-inner" style={{ backgroundColor: "#1C0335", margin: 0, width: '100%' }}>
							<div className='d-xl-flex flex-column justify-content-center align-items-center ' >
								<div className="row">

									<div className='row  mx-xl-1 w-100 d-none d-xl-flex '>

										{/* email */}
										<div className="col-12 col-xl-6">
											<CustomField label={'First Name'} labelStyle={'text-light'} placeholder={'john doe'} fontSize={20} className={'text-light'} width={'100%'} />
										</div>

										<div className="col-12 col-xl-6">
											<CustomField label={'Last Name'} labelStyle={'text-light'} placeholder={'Hello@gmail.com'} fontSize={20} className={'text-light'} width={'100%'} />
										</div>

									</div>


									<div className='d-xl-none w-100 '>
										{/* email */}
										<div className="col-12 ">
											<CustomField label={'First Name'} labelStyle={'text-light'} placeholder={'john doe'} fontSize={20} className={'text-light'} width={'100%'} />
										</div>

										<div className="col-12 ">
											<CustomField label={'Last Name'} labelStyle={'text-light'} placeholder={'Hello@gmail.com'} fontSize={20} className={'text-light'} width={'100%'} />
										</div>
									</div>


									<div className="col-12 col-xl-12 my-2">
										<CustomField label={'Email'} labelStyle={'text-light'} placeholder={'Hello@gmail.com'} fontSize={20} className={'text-light'} width={'100%'} />
									</div>



									<div className="col-12 col-xl-12 my-2">
										<CustomField label={'Username'} labelStyle={'text-light'} placeholder={'username'} fontSize={20} className={'text-light'} width={'100%'} />
									</div>



									<div className="col-12 col-xl-12 my-2">
										<CustomField label={'Password'} labelStyle={'text-light'} placeholder={'12345'} fontSize={20} className={'text-light'} width={'100%'} />
									</div>

									<div className="col-12 col-xl-12 mb-4 mt-4">
									<Custombutton className={'text-dark btn btn-base w-100 w-100'} buttonColor={'#CFE2FC'} text={'Join'} />
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
// 			      <div className="col-12 col-xl-6 col-lg-7">
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
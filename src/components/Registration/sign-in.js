import React, { useEffect } from 'react';
import logo from "./asserts/logo.png"
import "./Css/style.css"
import { FaFacebook } from 'react-icons/fa'
import Custombutton from '../UI/Custombutton';
import CustomField from '../UI/CustomField';

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

							<div className='d-flex justify-content-center  mx-5' >

								<Custombutton  text={'Join using Facebook'} className={'w-100'} buttonColor={'#CFE2FC'} icon={'facebook'} />
							</div>
							<p className='mt-2 text-light'> OR </p>

						</div>



						<form className="signin-inner" style={{ backgroundColor: "#1C0335", margin: 0, width: '100%' }}>
							<div className='d-xl-flex flex-column justify-content-center align-items-center ' >
								<div className="row">


									{/* email */}
									<div className="col-xl-12">
										<CustomField label={'Email'} labelStyle={'text-light'} placeholder={'Hello@gmail.com'} fontSize={20} className={'text-light'} width={'100%'} />
									</div>



									{/* passsword */}
									<div className="col-xl-12 my-4">
										<CustomField label={'Password'} labelStyle={'text-white'} className={'text-white'} />
									</div>

									{/* login button */}
									<div className="col-xl-12 mb-4 ">
										<Custombutton className={'text-dark w-100'} buttonColor={'#CFE2FC'} text={'Join'} />
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactForm extends Component {

  componentDidMount() {

    const $ = window.$;

     $( '.footer-area.style-two' ).removeClass( 'mg-top-100' );

   }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="contact-page-area pd-top-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
                    <div className="contact-details-inner mng-box-shadow">
                      <h4>Register your Interest</h4>
                      <p>
                          Register your Interest
                          Fill out the form, or call us to

                          Schedule an inspection.
                          </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="contact-single-list">
                            <h5>India Office</h5>
                            <ul>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> 420 Love Sreet 133/2 Mirpur  Nevis, Caribbean Dhaka</li>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> +(066) 19 5017 800 628</li>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> +(066) 19 5017 800 628</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-single-list">
                            <h5>India Office</h5>
                            <ul>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> +(066) 19 5017 800 628</li>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> +(066) 19 5017 800 628</li>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> +(066) 19 5017 800 628</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="contact-single-date">
                            <p><strong>Monday-Friday:</strong> 9am - 8pm</p>
                            <p><strong>Saturday:</strong> 10 am to 3 pm</p>
                            <p><strong>Sunday: </strong> Clossed</p>
                          </div>
                        </div>
                        <div className="col-md-6 align-self-center text-md-right">
                          <ul className="social-area style-3">
                            <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fab fa-skype" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                    <form>
                      <div className="row">
                        <div className="col-xl-6 col-md-6">
                          <div className="single-select-inner style-bg-border">
                            <select>
                              <option value={1}>General Information</option>
                              <option value={2}>General Information</option>
                              <option value={3}>General Information</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Subject" />
                          </label>
                        </div>
                        <div className="col-xl-12 col-lg-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Name" />
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Email" />
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Phone" />
                          </label>
                        </div>
                        <div className="col-12">
                          <label className="single-input-inner style-bg-border">
                            <textarea placeholder="Message" defaultValue={""} />
                          </label>
                        </div>
                        <div className="col-12 mb-4">
                          <button className="btn btn-base">Submit Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="contact-page-map mg-top-100">
                <iframe src="https://maps.google.com/maps?q=enugu&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              </div>
            </div>

        }
}

export default ContactForm
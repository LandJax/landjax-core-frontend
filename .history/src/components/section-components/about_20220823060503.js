import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="about-area bg-gray pd-top-120 pd-bottom-120">
              <div className="container">
                <div className="single-about-inner about-line-right bg-white">
                  <div className="row no-gutter">
                    <div className="col-lg-4 order-lg-12">
                      <div className="thumb" style={{background: 'url('+publicUrl+'assets/images/agent/agent2.png)'}} />
                    </div>
                    <div className="col-lg-8 order-lg-1">
                      <div className="details">
                        <div className="section-title mb-4">
                          <h6>We Offer the best real estate</h6>
                          <h2>The experts in local.</h2>
                          <p>Buying a home and selling the one you’re in doesn’t have to feel complicated. Our simplified approach helps you search, buy, and sell—all without having to stumble through the traditional process.

To make everything easier, we brought our local experts together, giving you a team of research analysts, loan officers, and Tour Specialists—all under one roof—including a dedicated LandJax Agent to guide you every step of the way.

This straightforward approach, combined with our competitive LandJax Cash Offer. </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Lands</li>
                              <li>Houses</li>
                              <li>Apartment</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Estates</li>
                              <li>Offices</li>
                            </ul>
                          </div>
                        </div>  
                        <a className="btn btn-base" href="#">SEE MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About
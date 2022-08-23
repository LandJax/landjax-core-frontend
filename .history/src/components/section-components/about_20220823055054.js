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
                      <div className="thumb" style={{background: 'url('+publicUrl+'assets/img/other/2.png)'}} />
                    </div>
                    <div className="col-lg-8 order-lg-1">
                      <div className="details">
                        <div className="section-title mb-4">
                          <h6>We Offer the best real estate</h6>
                          <h2>The experts in local.</h2>
                          <p>Buying a home and selling the one you’re in doesn’t have to feel complicated. Our simplified approach helps you search, buy, and sell—all without having to stumble through the traditional process.

To make everything easier, we brought our local experts together, giving you a team of research analysts, loan officers, and Tour Specialists—all under one roof—including a dedicated Flyhomes Agent to guide you every step of the way.

This straightforward approach, combined with our competitive Flyhomes Cash Offer, innovative ability to Buy Before You Sell, and our All-inclusive Listing Services help you buy and sell with ease so you can quickly get back to living your life. And because we know the unexpected can happen, we back each of our services with a guarantee so you can buy and sell with confidence.

How’d we get started? Our co-founders Tushar and Steve met in business school in 2015. Drawn together by their frustration with the homebuying and selling process, they used their backgrounds in real estate, finance, and machine learning to tackle the complicated endeavor of buying and selling a home. On a mission, they decided to become licensed real estate agents to better understand the process—and even helped some friends buy their homes along the way.

Since then, we’ve raised $190 million in venture capital. This money allows us to continuously innovate, build, and offer new, one-of-a-kind services so homebuyers and sellers like you can more easily find, buy, and sell with less hassle.

Interested in working with us? We’d love to hear from you.</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Lands</li>
                              <li>Exercitation ullamco</li>
                              <li>Dolore magna quis nisi</li>
                              <li>Lorem ipsum dolor manga</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Tempor incididunt Amet</li>
                              <li>Dolore magna quis nisi</li>
                              <li>Lorem ipsum dolor manga</li>
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
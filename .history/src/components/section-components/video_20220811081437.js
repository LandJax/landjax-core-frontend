import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Video extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="video-area bg-overlay">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-8 col-lg-10">
			        <div className="section-title text-center">
			          <h2>Check it Out</h2>
			          <p>A show case of out best properties lands and alot of invesments opportunities</p>
			          <a className="play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Video
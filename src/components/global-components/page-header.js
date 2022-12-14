import React from 'react';
import { Link } from 'react-router-dom';


const PageHeader = ({HeaderTitle,subheader}) => {
	// let HeaderTitle = this.props.headertitle;
	let publicUrl = process.env.PUBLIC_URL+'/'
	let Subheader = subheader ? subheader : HeaderTitle
	return(
		<div className="breadcrumb-area bg-overlay-2" style={{backgroundImage: 'url("'+publicUrl+'assets/images/13.jpg")'}}>
		  <div className="container">
		    <div className="breadcrumb-inner">
		      <div className="section-title text-center">
		        <h2 className="page-title">LANDJAX</h2>
		        <ul className="page-list">
		          <li><Link to="/">Home</Link></li>
		          <li>{ Subheader }</li>
		        </ul>
		      </div>
		    </div>
		  </div>
		</div>
	)
}
// class Page_header extends Component {

//     render() {

//         let HeaderTitle = this.props.headertitle;
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

//         return (

// 		<div className="breadcrumb-area bg-overlay-2" style={{backgroundImage: 'url("'+publicUrl+'assets/images/13.jpg")'}}>
// 		  <div className="container">
// 		    <div className="breadcrumb-inner">
// 		      <div className="section-title text-center">
// 		        <h2 className="page-title">LANDJAX</h2>
// 		        <ul className="page-list">
// 		          <li><Link to="/">Home</Link></li>
// 		          <li>{ Subheader }</li>
// 		        </ul>
// 		      </div>
// 		    </div>
// 		  </div>
// 		</div>
//         )
//     }
// }


export default PageHeader
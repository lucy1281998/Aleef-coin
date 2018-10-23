import React,{Component} from 'react'
import "../style/roadmap.css"

class Roadmap extends Component
{
	render()
	{
		return(
				
			<div className="container-fluid " style={{backgroundColor:'#efefef'}}>
				<h1 className="page-title animated hiding text-center map" data-animation="zoomIn">Road<span>Map</span></h1>
				<div className="conatiner roadmap">
				<img  className="mx-auto d-block img-fluid "src={require('../asset/roadmap.png')}/>
				</div>
			</div>		
			);
	}
}

export default Roadmap
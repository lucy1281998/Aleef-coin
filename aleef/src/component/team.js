import React,{Component} from 'react'
import "../style/team.css"

class Team extends Component
{
	render()
	{
		return(
			
	<section id="team" style={{backgroundColor:'#009270'}}>
		<div className="container text-center ">
				<h1 className="text-center text-white " >Our Team</h1>
					<div className="row">
						<div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							<div className="imageBg">
 								<img className="image mx-auto d-block" src={require('../asset/pic1.jpg')}/>
 								<h4 className="upperCase fontWeight">MOHAMMAD NASSER SULTAN </h4>
 								<h4 className="fontWeight green">BUSINESS HEAD</h4>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							<div className="imageBg">
 								<img className="image mx-auto d-block img-fluid" src={require('../asset/pic1.png')}/>
 								<h4 className="upperCase fontWeight">ROSELLA.R </h4>
 								<h4 className="fontWeight green">BUSINESS DEVELOPMENT HEAD</h4>
							</div>
						</div>
							
						<div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							<div className="imageBg">
 								<img className="image mx-auto d-block img-fluid" src={require('../asset/pic5.jpg')}/>
 								<h4 className="upperCase fontWeight">KIRAN KOUSHIK  </h4>
 								<h4 className="fontWeight green">FINANCE CONSULTANT</h4>
							</div>
						</div>
							
						<div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							<div className="imageBg">
 								<img className="image mx-auto d-block img-fluid" src={require('../asset/pic4.jpg')}/>
 								<h4 className="upperCase fontWeight">JANINE ANN</h4>
 								<h4 className="fontWeight green">LEGAL CONSULTANT</h4>
							</div>
						</div> 
					</div>
		</div>
							
					</div>
	
				</div>			

		</div>

	</section>		
			);
	}
}

export default Team
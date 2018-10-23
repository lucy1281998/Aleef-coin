import React,{Component} from 'react'
import '../style/about.css'

class About extends Component
{
	render()
	{
		return(

			<div className="container-fluid" id="about1">
					<h1 className="text-center pt-4 pb-4">About Us</h1>
				<h3 className="text-center">ALEEF GROUP OF COMPANIES</h3><br/>

				<div className="container" id="about2">
						<div className="row">
								<div className="col-xl-6">
									<p id="about3" className="pt-">
									Aleef Group of companies is a 2 decades old group of companies the group has footprints 
									in Dubai & India into several lucrative businesses with a vision of growth of society and 
									catering to basic needs at an affordable price. The group is presently in multiple businesses
									 mainly import & export, Healthcare, Real estate, organic foods and education. The group believes
									  in where Honesty is the only policy. The group donates to the social cause every month to a registered 
									  trust.Under Import export division Aleef group is exporting commodities and pulses to many 
									  different countries like Bangladesh, Srilanka, Maldives Islands, and UAE.</p>
									 <p id="about3" id="demo" class="collapse">
									  Under Real Estate division Aleef Group is providing for all asset classes of Indian real
									  estate like housing, commercial – office space and retail and hospitality. In recent years,
									  the growth has spread out to Tier-II and III cities as well. Aleef Group is having high growth
									  in services as well as the manufacturing sector has resulted in high demand for commercial and
									  industrial real estate. Further, the economic growth has trickled down to the large Indian middle
									  className increasing affordability and affluence. Improving living standards are driving the demand
									  for better quality housing and urban infrastructure.
   									
  									</p>
  									<button className="btn btn-primary text-center  "data-toggle="collapse" data-target="#demo" >Read More </button>

								</div>
								<div className="col-xl-6 col-md-8">
										<img className="img-fluid mt-2 mx-auto d-block img-fluid" id="businessesgif" src="https://www.niswey.com/new/wp-content/uploads/2016/08/engagement-1.gif"/>
								</div>

						</div>

				</div>








			</div>

			);
	}
}
export default About
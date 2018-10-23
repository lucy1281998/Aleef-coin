import React,{Component} from 'react'
import '../style/comingup.css'
class Comingup extends Component
{
	render()
	{
		const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

   	let countDown = new Date('Sep 30, 2018 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
      distance = countDown - now;

      	// document.getElementById('days').innerText = Math.floor(distance / (day)),
       //  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
       //  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
       //  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      	}, second)
	
    	 
		return(

			<div className="container-fluid" id="comingup">
				<div className="row"  >
					<div className="col-xl-12">
						<div className="container" >
							<div className="row center-block text-center" id="comingup1">
								<div className="col-lg-12 col-xs-12 col-md-12 icon">
								<h1 className="page-title ico-title" data-animation="zoomIn"> ICO SALE ENDS IN </h1>
								<div className="timer">
								<ul>
								<li><span  id="days"></span>days</li>
								<li><span id="hours"></span>Hours</li>
								<li><span id="minutes"></span>Minutes</li>
								<li><span id="seconds"></span>Seconds</li>
								</ul>
									<h5 id="start">Starts on 19th August 2018</h5>
									<h5 id="start">Ends on 22nd October 2018</h5>
								</div>			
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div>


			);
	}
}

export default Comingup
import React from 'react'
import "../style/slider.css"
import About from '../component/about.js'
import Comingup from '../component/comingup.js'
import Referal from '../component/referal.js'
import Whitepaper from '../component/whitepaper.js'
import Roadmap from '../component/roadmap.js'
import Team from '../component/team.js'





const Home = () =>
{
	return(

		<div>
			  <div className="container-fluid" id="slider">
          <div className="row">
            <div className="col-sm-6" id="market">
              </div>

                      <div className="col-sm-5 " id="register">
                      <h3 className="text-white">COME! LET'S PROSPER</h3>
                      <p className="text-white">State of the art decentralized cryptocurrency built on an<br/>
                      Ethereum platform to make minimum investments and<br/> maximum profits.
                      </p>
                      <form className="form-group text-center center-block">
                      <h2 id="token">ICO TOKEN SALE - SLAB 2</h2><br/>
                      <button className="btn btn-primary">Register </button><br/><br/>
                      <h2 id="token2" >Avail 30% free coins on ICO Slab-2 Sale</h2><br/>
                      <h4 id="token3" className="text-center">(1 ALEEF Coin = USD $0.40)</h4>
                       </form>
            </div>
          </div>  
        </div>
          <About/>
          <Comingup/>
          <Referal/>
          <Whitepaper/>
          <Roadmap/>
          <Team/>
    </div>	

		)
}
export default Home
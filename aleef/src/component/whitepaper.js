import React, {Component} from 'react'
import '../style/whitepaper.css'

class Whitepaper extends Component
{
    render()
    {
        return(

            <div className="container-fluid" id="whitepaper">
                <h2 className="page-title animated hiding" data-animation="zoomIn">White<span>Paper</span></h2>
                  <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-2 ml-auto white-contain">
                            <p>ALEEF Coin is a new cryptocurrency based on the Ethereum Blockchain that
                            will be distributed through our channel partners and made available to everyone,
                            anytime, anywhere. This is the core of our business, and market development will
                            be at the center of our strategy.<br/><br/>
                            ALEEF Coin is the First cryptocurrency to revolutionize the payments and investments
                            industry, synergies between the reach of investors 
                            and the fast, borderless nature of Blockchain technology. ALEEF Coin is a cryptocurrency,
                            a digital asset designed to work as a medium of exchange alternative for all payments and investments.
                            This whitepaper and the below contents will explain how ALEEF coin intend to create this alternative system
                            for their investors.<br/><br/>

                            ALEEF Coin will offer a secure, completely encrypted, two factor authenticated login 
                            mobile wallet to its users for payment transactions. It provides the users the easier way of payment transaction
                            by integrating with a secured payment gateway to convert their fiat currencies such as United Arab Emirates Dirham,
                            India Rupees, US Dollars, etc., into ALEEF Coin. Multiple layered secure transactions are provided to convert Bitcoin
                            and ETHER into an ALEEF Coin.<br/><br/>
                            RETURN ON INVESTMENT / PROFIT SHARING – <br/><br/></p>
                            <p id="demo" className="collapse">One of the major business of Aleef group is real estate. Real estate is generally 
                            a great investment option. It can generate an ongoing passive income, and it can prove
                            to be a good long-term investment if its value increases exponentially over time. By keeping in 
                            mind Dubai Expo 2020, the funds generated through ICO will be invested on Real estate both in Dubai & India.
                            And the profit generated from it will be shared to all the investors. The value of profit will be shared as
                            Aleef coins to its investors.</p>
                            <button className="btn btn-primary text-center" id="download" data-toggle="collapse" data-target="#demo" >Read More </button>

                        </div>
                        <div className="col-xl-4 pl-2"  id="document">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-white text-center mt-4">WhitePaper</h5>
                                    <p className="document1">Aleef Group of companies is a 2 decades old group of companies the group has
                                    foot prints in Dubai & India into several lucrative businesses with a vision of
                                    growth of society and catering to basic needs at an affordable price.</p>
                                </div>
                                <div className="card-footer">
                                <button className="btn">Download Here</button>
                                </div>
                            </div>
                            
                        </div>
                    
                        
                     </div>
                     </div>
                </div>


        );
    }
}
export default Whitepaper
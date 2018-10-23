import React,{Component} from 'react'
import '../style/referal.css'

class Referal extends Component

{
    render()
    {
        return(

            <div className="container-fluid" id="referal1">
                <h2 className="text-center ">ICO SALE / REFERRAL</h2>
                    <img className="mx-auto img-fluid d-block mh-10" src={require('../asset/referal.png')}/>
            </div>


        );
    }
}
export default Referal;
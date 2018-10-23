import React, { Component } from 'react';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./component/Home"
import Signup from './component/Signup'
import Error from './component/error'
import Navbar from './component/navbar'
import About from './component/about.js'



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar/>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/Signup" component={Signup} />
                <Route path="/About" component={About} />

                <Route component={Error}/>

              </Switch>
          </div>      
        </BrowserRouter>        
    );
  }
}

export default App;

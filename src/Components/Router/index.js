import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Home';
import AboutMe from '../AboutMe';
import Experience from '../Experience';

class Routes extends Component{
    // constructor(){
       
    // }
    render(){
        return( <Router>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/aboutMe" component={AboutMe}></Route>
            <Route exact path="/experience" component={Experience}></Route>
        </Switch>
    </Router>);
    }
} 
export default Routes;
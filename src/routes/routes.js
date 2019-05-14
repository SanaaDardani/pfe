import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom';
import HomePage from '../containers/HomePage/HomePage';
import Auth from '../containers/Auth/Auth';
import ModelCar from '../components/Models/ModelCar';
import Reporting from '../Api/Reporting'
import Notfound from './error/notfound';

const routes = ()=> (

        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/auth" component={Auth}/>
            <Route exact path="/models/:model" component={ModelCar}/>
            <Route exact path="/:reporting" component={Reporting}/>
            <Route component={Notfound} />
            <Redirect to="/" />
        </Switch>
)

export default routes;

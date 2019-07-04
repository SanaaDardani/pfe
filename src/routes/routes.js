import React from 'react'
import {Route,Switch} from 'react-router-dom';
import HomePage from '../containers/HomePage/HomePage';
import ModelCar from '../containers/Models/ModelCar';
import Reporting from '../components/Chart/ReportingModels';
import Cote from '../containers/CotePage/Cote';
import CardMarket from '../containers/CardMarket/CardMarket';
import notfound from './error/notfound';

const routes = ()=> (

        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/cardMarket" component={CardMarket}/>
            <Route exact path="/model/:model" component={ModelCar}/>
            <Route exact path="/cote/:mark/:modele/:kilometre/:carburant/:date/:ville" component={Cote}/>
            <Route exact path="/:reporting" component={Reporting}/>
            <Route component={notfound} />
        </Switch>
)

export default routes;

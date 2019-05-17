import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import HomePageStyle from './HomePage.style';
import Auxi from '../../hoc/Auxi';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { ScatterChart,Scatter,XAxis,YAxis,ZAxis,CartesianGrid,Tooltip,Legend}from "recharts";
import MainSearch from '../../components/MainSearch/MainSearch'

// Action creators
import {fetchMarques} from '../../redux/marques/actions';


// Reporting 
const dataScater1 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 }
  ];
const dataScater2 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 }
  ];
  
class HomePage extends Component{

    componentWillMount()
    {
        this.props.fetchMarques();
    }
  
    render() {
    
    const { classes, marques } = this.props;
    // const { params } = this.props.match

    return (
    <Auxi>
        <MainSearch />
            <Grid container className={classes.root}>
                <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <ScatterChart width={900} height={300}
                    margin={{ top: 30, right: 0, bottom: 30, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" name="stature" unit="cm" />
                    <YAxis dataKey="y" name="weight" unit="kg" />
                    <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="A school" data={dataScater1} fill="#8884d8" />
                    <Scatter name="B school" data={dataScater2} fill="#82ca9d" />
                </ScatterChart>
                    </Grid>
                <Grid item xs={2}></Grid>
            
                <Grid item xs={2}></Grid>
                    {
                    marques.map((marque) => {
                        return (
                            <Grid item xs={2} className={classes.spacing}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <NavLink to={`/models/${marque.name.toLowerCase()
                                            .split(' ').join('_')}`} className={classes.link}>
                                                <h3 className={classes.stTitle}>
                                                    {marque.name}
                                                </h3>
                                                <span className={classes.price}>
                                                    {marque.prix}
                                                </span>
                                        </NavLink>
                                    </CardContent>
                                </Card>
                            </Grid>
                                    );
                                })
                            }
                <Grid item xs={2}></Grid>
            </Grid>
    </Auxi>
  
    )
   
  }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
}; 

const mapStateToprops = state =>({
    marques : state.marques
})

export default connect(mapStateToprops,{ fetchMarques })(withStyles(HomePageStyle)(HomePage))



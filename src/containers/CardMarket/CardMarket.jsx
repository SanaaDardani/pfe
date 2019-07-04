import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Auxi from '../../hoc/Auxi';
import CardMarketStyle from './CardMarket.style';
import { Typography } from '@material-ui/core';

// Reporting 
import ReportingMarques from './../../components/Chart/ReportingMarques';

// Action creators
import {fetchMarques} from '../../redux/marques/actions';



class CardMarket extends Component {
    componentWillMount()
    {
        this.props.fetchMarques()
    }
    render() {
        const { classes, marques } = this.props;
        return (
            <Auxi>
                <Typography variant="h4" style={{textAlign:'center',fontWeight:'700',lineHeight:'3.17'}}>
                    Le moteur de recherche des voitures d’occasion
                </Typography>
            <Grid container>
                <Grid item xs={12}>
                    <ReportingMarques />
                </Grid>
                <Typography variant="h6" style={{color:'#559ee2',margin:'0 auto'}}>
                    Marques les plus populaires
                </Typography>
                <Grid container item xs={12}>
                
                {
                    marques.map((marque, index) => {
                    return (
                        <Grid item xs={1} key={index}>
                        <Card className={classes.card}>
                            <NavLink to={`/model/${marque.mark}`} className={classes.link}>
                                <CardContent className={classes.content}>
                                    <h3 className={classes.stTitle}>
                                        {marque.mark}
                                    </h3>
                                    <span className={classes.price}>
                                        {marque.price.toLocaleString(navigator.language,
                                        { minimumFractionDigits: 2 })}DH
                                    </span>
                                </CardContent>
                            </NavLink>
                            </Card>
                    </Grid>
                        );
                        }) 
                } 
                </Grid>
            </Grid>
            </Auxi>
        )
    }
}
const mapStateToprops = state =>({
    marques : state.marques
})

export default connect(mapStateToprops,{ fetchMarques })(withStyles(CardMarketStyle)(CardMarket))

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
import Form from '../../components/Form/Form';

// Action creators
import {fetchMarques} from '../../redux/marques/actions';
// Reporting 
import ReportingMarques from './../../components/Chart/ReportingMarques';
 

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
            
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <Form />
                </Grid>
                <Grid item xs={6} style={{textAlign:'center'}}>
                    <ReportingMarques />
                </Grid>
    
                    {
                        marques.map((marque, index) => {
                        return (
                            
                            <Grid item xs={2} key={index}>
                                <Card className={classes.card}>
                                            <NavLink to={`/model/${marque.mark}`} className={classes.link}>
                                                <CardContent>
                                                    <h3 className={classes.stTitle}>
                                                        {marque.mark}
                                                    </h3>
                                                    <span className={classes.price}>
                                                        {marque.price}
                                                    </span>
                                                </CardContent>
                                            </NavLink>
                                    </Card>
                            </Grid>
                            );
                            })
                    }
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



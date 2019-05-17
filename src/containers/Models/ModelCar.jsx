import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Auxi from '../../hoc/Auxi';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModelCarStyle from './Modelcar.style';

// Action creators
import {fetchModels} from '../../redux/models/actions';

class ModelCar extends Component{

    componentWillMount()
    {
        this.props.fetchModels();
    }

  render() {
    
    const { classes,models} = this.props;

    return (
    <Auxi>
        <Grid container className={classes.root}>
            <Grid item xs={2}></Grid>
            {
                models.map((model) => {
                    return (
                            <Grid item xs={2} className={classes.spacing}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <NavLink to={`/${model.name.toLowerCase()
                                             .split(' ').join('_')}`}className={classes.link}>
                                                <h3 className={classes.stTitle} >
                                                    {model.name}
                                                </h3>
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

ModelCar.propTypes = {
    classes: PropTypes.object.isRequired,
}; 


const mapStateToprops = state =>({
    models : state.models
})

export default connect(mapStateToprops,{ fetchModels })(withStyles(ModelCarStyle)(ModelCar))



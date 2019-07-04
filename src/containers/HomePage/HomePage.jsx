import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Auxi from '../../hoc/Auxi';
import CoteForm from '../../components/Form/CoteForm';

class HomePage extends Component{

    render() {
    return (
        
    <Auxi>
        <Grid container>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
                <CoteForm/>
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
    </Auxi>
  
    )
   
  }
}


export default HomePage;
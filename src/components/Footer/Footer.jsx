import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FooterStyle from './Footer.style';

function Footer(props) {
    const { classes } = props;
   
    return (
      <footer className={classes.footer}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" color="inherit">
            React App with Material UI
          </Typography>
          <Typography component="p">
            @2019 All right reserved
          </Typography>
        </Paper>
      </footer>
    );
  }
   
  Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
   
  export default withStyles(FooterStyle)(Footer);
 

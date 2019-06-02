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
            {/* <Paper className={classes.paper} elevation={1}>
                <Typography variant="h6" className={classes.title}>
                    React App with Material UI
                </Typography>
                <Typography component="p"className={classes.parag}>
                    @2019 All right reserved
                </Typography>
            </Paper> */}
      </footer>
    );
  }
   
  Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
   
  export default withStyles(FooterStyle)(Footer);
 

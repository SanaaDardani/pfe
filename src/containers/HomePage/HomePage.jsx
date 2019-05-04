import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomePageStyle from './HomePage.style';
import Auxi from '../../hoc/Auxi'


function SimpleCard(props) {

    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
        <Auxi>
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          car brand
                        </Typography>
                        <Typography variant="h5" component="h2">
                          Volkswagen
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                </Grid>
        </Auxi>
      );
  }
  
  SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(HomePageStyle)(SimpleCard);


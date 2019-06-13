import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


const styles = theme => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});
 
class DateVehiculeForm extends React.Component {
  state = {
    date: '',
    values: []
  }
  
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log(event.target.value)
  };

 createYear = (index) => {
     const options = [];
        for (let i = 1950; i <= new Date().getFullYear(); i++){
            options.push(
               <MenuItem value={i} key={i}>{i}</MenuItem>
            );
        }
            return options;
        }
  render() {
    const { classes } = this.props;
    const { values } = this.state;

    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography variant="h6" style={{ paddingTop: "2.35em" }}>
                    De quand date le véhicule ?			
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <form className={classes.container} noValidate autoComplete="off"> 
                     </form>
            </Grid>
        </Grid>
    );
  }
}

DateVehiculeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateVehiculeForm);
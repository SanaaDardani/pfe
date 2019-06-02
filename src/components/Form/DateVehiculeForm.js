import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';


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
 
class DateVehicule extends React.Component {
  state = {
    year: '',
    values: []
  }
  
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

 createYear = (values) => {
     const options = [];
        for (let i = 1950; i <= new Date().getFullYear(); i++){
            options.push(<option value={i}>{i}</option>);
        }
            return options;
        }

  render() {
    const { classes } = this.props;
    const { values } = this.state;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
				De quand date le véhicule ?			
			</Typography>
            <form className={classes.container} noValidate autoComplete="off">
                 <TextField
                id="standard-select-currency"
                select
                label="Année"
                className={classes.textField}
                value={this.state.year}
                onChange={this.handleChange('year')}
                helperText="S'il vous plaît sélectionnez votre année de votre vehicule"
                margin="normal"
                SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
            >
                  {this.createYear(values)}
                ))}
                        
          ))}
        </TextField>
            </form>
        </React.Fragment>
    );
  }
}

DateVehicule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateVehicule);
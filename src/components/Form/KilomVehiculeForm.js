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

const currencies = [
    {
      value: 'GAZOLE',
      label: 'GAZOLE',
    },
    {
      value: 'DIESEL',
      label: 'DIESEL',
    },
    {
        value: 'GPL',
        label: 'GPL',
      },
    {
      value: 'ESSENCE',
      label: 'ESSENCE',
    },
    {
      value: 'GNV',
      label: 'GNV',
    },
  ];
class kilometresVehicule extends React.Component {
  state = {
    carburants : 'ESSENCE',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
   
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Combien de kilomètres au compteur ?			
            </Typography>
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="standard-number"
                label="Kilométrage"
                value={this.state.age}
                onChange={this.handleChange('kilometres')}
                type="number"
                className={classes.textField}
                helperText="S'il vous plaît sélectionnez votre Kilométrage"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
            <TextField
                id="standard-select-currency"
                select
                label="Carburants"
                className={classes.textField}
                value={this.state.carburants}
                onChange={this.handleChange('carburants')}
                SelectProps={{
                    MenuProps: {
                    className: classes.menu,
                    },
                }}
                helperText="S'il vous plaît sélectionnez votre carburant"
                margin="normal"
            >
                {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
      </form>
        </React.Fragment>
    );
  }
}

kilometresVehicule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(kilometresVehicule);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import styles from './mainSearch.style';


class SelectCar extends React.Component {
    state = {
        car: '',
    };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
        <>
            <div className={classes.overlay}>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.car}
                            onChange={this.handleChange}
                            name="car"
                            displayEmpty
                            className={classes.select}
                        >
                        <MenuItem value="" disabled style={{color:"#fff"}}>Placeholder</MenuItem>
                        <MenuItem value={10}>Car1</MenuItem>
                        <MenuItem value={20}>Car2</MenuItem>
                        <MenuItem value={30}>Car3</MenuItem>
                        </Select>
                        <FormHelperText style={{color:"#fff"}}>Placeholder</FormHelperText>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.car}
                            onChange={this.handleChange}
                            name="car"
                            displayEmpty
                            className={classes.select}
                        >
                        <MenuItem value="" disabled style={{color:"#fff"}}>Placeholder</MenuItem>
                        <MenuItem value={10}>Car1</MenuItem>
                        <MenuItem value={20}>Car2</MenuItem>
                        <MenuItem value={30}>Car3</MenuItem>
                        </Select>
                        <FormHelperText style={{color:"#fff"}}>Placeholder</FormHelperText>
                    </FormControl>
                    <Button variant="contained" size="small" className={classes.primary}>
                        Envoyée
                    </Button>
                </form>
        
            </div>
            <iframe src = 'https://youtube.com/embed/Hvdbvr_ITZk'
                allow = 'autoplay; encrypted-media'
                allowFullScreen width = "100%" height = "500" 
                title = 'video' className={classes.iframCar}
            />
        </>
    );

  }
        
}


SelectCar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectCar);
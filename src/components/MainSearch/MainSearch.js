import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import styles from './mainSearch.style';
import video1 from '../../assets/video/video-background.mp4';
import Form from '../Form/Form'


class MainSearch extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <>
            <div className={classes.overlay}>
                
            </div>
            {/* <video className={classes.v} width = "100%" height = "100%" src={video1}></video> */}
            <iframe src ={video1}
                allow = 'autoplay; encrypted-media'
                allowFullScreen width = "100%" height = "500" 
                title = 'video' className={classes.iframCar}
            />
           
        </>
    );

  }
        
}


MainSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainSearch);
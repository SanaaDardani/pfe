import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'BM BABY',
    imgPath:
      'https://img.bfmtv.com/c/630/420/25b/b154879fc4830422e4d47b97e880b.jpg'
  },
  {
    label: 'TOMOBILA ROZE',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIBg7VzJiYCOp00z5vd2dlxk9LnJDK3qS2leY-zcRZ7xj4dPC'
  },
  {
    label: 'wili 3la hdida',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVOoXDLFqBVrhG92THKsM_8GshyJEYqxHFwaWgseZoXprsACG'
  },
  {
    label: 'titize acidi',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllZBa5OdDpJADUVNpCqRkR9vOJ1kHROHI3DjJ-LuyijLNBxE9'
  },
  {
    label: 'Aaaaaa7 3la macaron',
    imgPath:
      'https://franprint.fr/wp-content/uploads/2018/08/z-dcoration-vhicule-utilitaire-lger-27094.jpg'
  },
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class Cote extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? 
                            (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
        //     nextButton={
        //     <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
        //       Next
        //       {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        //     </Button>
        //   }
        //   backButton={
        //     <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
        //       {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        //       Back
        //     </Button>
        //   }
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{tutorialSteps[activeStep].label}</Typography>
            <Typography component="p">{tutorialSteps[activeStep].paragraphe}</Typography>
        </CardContent>
        </CardActionArea>
        </Card>
      </div>
    );
  }
}
// image={require('../../assets/img/vehicule.jpg')}

Cote.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Cote);
                    
             
import React from "react";
import CoteVehiculeForm from "./CoteVehiculeForm";
import DateVehiculeForm from "./DateVehiculeForm";
import KilomVehiculeForm from "./KilomVehiculeForm";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
    backgroundImage: "linear-gradient(45deg, #0288d1, #26c6da)",
    color: "#fff",
    boxShadow: "0 6px 20px 0 rgba(38, 198, 218, .5)"
  }
});

const steps = ["CoteVehicule", "DateVehicule", "KilomVehicule"];

function getStepContent(
  step,
  values,
  handleChange,
  marks,
  modele,
  date,
  kilometre
) {
  switch (step) {
    case 0:
      return (
        <CoteVehiculeForm
          marks={marks}
          values={values}
          handleChange={handleChange}
        />
      );
    case 1:
      return (
        <DateVehiculeForm
          date={date}
          values={values}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <KilomVehiculeForm
          kilometre={kilometre}
          values={values}
          handleChange={handleChange}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

class Form extends React.Component {
  state = {
    activeStep: 0,
    marks: "",
    modele: "",
    date: "",
    kilometre: ""
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { classes, marks } = this.props;
    const { activeStep } = this.state;
    const { modele, date, kilometre } = this.state;
    const values = { modele, marks, date, kilometre };
    console.log(this.state);
    return (
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">
            Calculer ma cote gratuite
          </Typography>

          {activeStep === steps.length ? (<h1 />) : (
            <div>
              {getStepContent(activeStep,values,this.handleChange,marks,modele,date,kilometre)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={this.handleBack} className={classes.button}>
                    précédent
                  </Button>)
				}
                <Button
                  variant="contained"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Suivant"}
                </Button>
              </div>
            </div>
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Form);

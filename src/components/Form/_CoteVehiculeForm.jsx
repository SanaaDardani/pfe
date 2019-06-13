import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import axios from "axios";

// Action creators
import { fetchModels } from "../../redux/models/actions";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "30px"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class CoteVehiculeForm extends React.Component {
  state = {
    selectedModel: "",
    selectedMark: "",
    models: [],
    
  };

  handleChangeMarksSelect = event => {
    this.setState({ selectedMark: event.target.value, name: event.target.value });
    axios
      .get("http://127.0.0.1:8000/api/models/" + event.target.value)
      .then(res => {
        this.setState({ models: res.data });
      });
  };

  handleChangeModelsSelect = event => {
    this.setState({ selectedModel: event.target.value, name: event.target.value });

  };

  renderMarquesOptions() {
    return this.props.marks.map((mark, i) => {
      return (
        <MenuItem value={mark.mark} key={i} name={mark.mark}>
          {mark.mark}
        </MenuItem>
      );
    });
  }
  renderModelsOptions() {
    return this.state.models.map((model, i) => {
      return (
        <MenuItem value={model.model} key={i} name={model.model}>
          {model.model}
        </MenuItem>
      );
    });
  }
  
  
  render() {
    const { classes } = this.props;

    return (

        <Grid container className={classes.root}>
            <Grid item xs={6}>
              <InputLabel>Marques : </InputLabel>
                  <Select value={this.state.selectedMark} onChange={this.handleChangeMarksSelect}
                      name="marque"
                      style={{ width: "50%" }}
                  >
                    {this.renderMarquesOptions()}
                  </Select>
            </Grid>

            <Grid item xs={6}>
                <InputLabel>Models : </InputLabel>
                <Select 
                    value={this.state.selectedModel}
                    onChange={this.handleChangeModelsSelect} 
                    name="model"
                    style={{ width: "50%" }}
                >
                    {this.renderModelsOptions()}
                </Select>
        </Grid>
       
        </Grid>
    );
  }
}

CoteVehiculeForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
  models: state.models
});
export default connect(
  mapStateToprops,
  { fetchModels }
)(withStyles(styles, { withTheme: true })(CoteVehiculeForm));

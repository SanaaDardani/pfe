import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import history from '../../history';


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "30px",
    textAlign:"center"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    maxWidth: 120
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
      margin: "10px"
    }
  },
  button: {
    margin: "0 auto",
    backgroundImage : 'linear-gradient(45deg, #0288d1, #26c6da)'
  }
});

class CoteForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
        selectedMark: "",
        selectedModel: "",
        kilometre: "",
        selectedCarburant: "",
        date: "",
        selectedCity: "",
        values: [],
        models: [],
        carburants: [],
        cities: [],
        marks : []
    };
  }
    componentWillMount()
    {

        axios
        .get("http://127.0.0.1:8000/api/cities")
        .then(res => {
            this.setState({ cities: res.data });
        });
        axios
        .get("http://127.0.0.1:8000/api/fuelTypes")
        .then(res => {
            this.setState({ carburants: res.data });
        });
        
        axios
        .get("http://127.0.0.1:8000/api/marks/ids")
        .then(res => {
            this.setState({ marks: res.data });
        });
        
    }

        handleChangeMarksSelect = event => {
            this.setState({
            selectedMark: event.target.value
            });
        axios
        .get("http://127.0.0.1:8000/api/models/" + event.target.value)
        .then(res => {
            this.setState({ models: res.data });
        });
  };

  handleChangeModelsSelect = event => {
    this.setState({
      selectedModel: event.target.value
    });
  };
  handleChangeCarburantsSelect = event =>
  {
    this.setState({
      selectedCarburant : event.target.value
    })
  }
  handleChangeCitiesSelect = event =>
  {
    this.setState({
      selectedCity : event.target.value
    })
    
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    history.push('/Cote/'+this.state.selectedMark+'/'+this.state.selectedModel+'/'+this.state.kilometre+
    '/'+this.state.selectedCarburant+'/'+this.state.date+'/'+this.state.selectedCity); //redirection 
//    const { selectedMark,selectedModel,date,kilometre,selectedCarburant,selectedCity } = this.state;

//     console.log(`A votre Marque : ${selectedMark} 
//     An Modele : ${selectedModel} and year was ${date} and kilometrage ${kilometre} 
//     and carburant ${selectedCarburant} and cities ${selectedCity}`);
  };

  renderMarquesOptions() {
    return this.state.marks.map((mark, i) => {
      return (
        <MenuItem value={mark._id} key={i} name={mark.name}>
          {mark.name}
        </MenuItem>
      );
    });
  }

  renderModelsOptions() {
    return this.state.models.map((model, i) => {
      return (
        <MenuItem value={model._id} key={i} name={model.model}>
          {model.model}
        </MenuItem>
      );
    });
  }

  renderCarburantsOptions() {
    return this.state.carburants.map((carburant, i) => {
      return (
        <MenuItem value={carburant._id} key={i} name={carburant.name}>
          {carburant.name}
        </MenuItem>
      );
    });
  }

  renderCitiesOptions() {
    return this.state.cities.map((city, i) => {
      return (
        <MenuItem value={city._id} key={i} name={city.name}>
          {city.name}
        </MenuItem>
      );
    });
  }

  renderYearsOptions = () => {
    const options = [];
    for (let i = 1950; i <= new Date().getFullYear(); i++) {
      options.push(
        <MenuItem value={i} key={i}>
          {i}
        </MenuItem>
      );
    }
    return options;
  };
  
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <Paper className={classes.paper}>
         <Grid container className={classes.root}>
            <Grid item xs={6}>
                <FormControl required className={classes.formControl}>
                    <InputLabel> Marques </InputLabel>
                    <Select
                    value={this.state.selectedMark}
                    onChange={this.handleChangeMarksSelect}
                    name="marque"
                    >
                    {this.renderMarquesOptions()}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl required className={classes.formControl}>
                <InputLabel> Models </InputLabel>
                <Select
                  value={this.state.selectedModel}
                  onChange={this.handleChangeModelsSelect}
                  name="model"
                >
                  {this.renderModelsOptions()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Kilométrage"
                value={this.state.age}
                onChange={this.handleChange("kilometre")}
                type="number"
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl required className={classes.formControl}>
                <InputLabel> Carburants </InputLabel>
                <Select
                  value={this.state.selectedCarburant}
                  onChange={this.handleChangeCarburantsSelect}
                  name="carburant"
                >
                  {this.renderCarburantsOptions()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl required className={classes.formControl}>
                <InputLabel> Année </InputLabel>
                <Select
                  value={this.state.date}
                  onChange={this.handleChange("date")}
                  name="year"
                >
                  {this.renderYearsOptions()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl required className={classes.formControl}>
              <InputLabel> Ville </InputLabel>
              <Select
                value={this.state.selectedCity}
                onChange={this.handleChangeCitiesSelect}
                name="city"
              >
                {this.renderCitiesOptions()}
              </Select>
            </FormControl>
          </Grid>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              value="submit"
              type="submit"
            >
              Envoyée
            </Button>
          </Grid>
        </Paper>
      </form>
    );
  }
}

CoteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(CoteForm);

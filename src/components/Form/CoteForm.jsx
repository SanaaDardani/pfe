import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const styles = theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      paddingTop: "30px"
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
          marginTop: theme.spacing.unit * 6,
          marginBottom: theme.spacing.unit * 6,
          padding: theme.spacing.unit * 3,
          margin:'10px'
        }
    },
    button:{
        margin:'0 auto'
    }
  });
  const carburants = [
    {
      value: 'GAZOLE',
      label: 'GAZOLE',
    },
    {
      value: 'DIESEL',
      label: 'DIESEL',
    },
    {
      value: 'ESSENCE',
      label: 'ESSENCE',
    },

  ];

  class CoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedMark : "",
      selectedModel : "",
      models : [],
      date: '',
      values:[],
      carburant : '',
      kilometre: '' 
    }
  }

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
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const {selectedMark,selectedModel,date,kilometre,carburant} = this.state

    console.log(`A votre Marque was submitted: ${selectedMark} 
    An Modele was submitted: ${selectedModel} and year was ${date} and kilometrage ${kilometre} 
    and carburant ${carburant}`)
  }

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
  createYear = () => {
    const options = [];
       for (let i = 1950; i <= new Date().getFullYear(); i++)
       {
           options.push(<MenuItem value={i} key={i}>{i}</MenuItem>);
       }
           return options;
  }
  render() {
    const { classes } = this.props;
    const { values } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
            <Paper className={classes.paper}>
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
                <Grid item xs={6}>
                        <TextField
                            label="Kilométrage"
                            value={this.state.age}
                            onChange={this.handleChange('kilometre')}
                            type="number"
                            className={classes.textField}
                            helperText="S'il vous plaît sélectionnez votre Kilométrage"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        label="Carburants"
                        className={classes.textField}
                        value={this.state.carburant}
                        onChange={this.handleChange('carburant')}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="S'il vous plaît sélectionnez votre carburant"
                        margin="normal"
                    >
                {carburants.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
                </Grid>
               
                <Grid item xs={12}>
                    <TextField
                      select
                      label="Année"
                      className={classes.textField}
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange('date')}
                      helperText="S'il vous plaît sélectionnez votre année de votre vehicule"
                      margin="normal"
                      SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                    >
                  {this.createYear(values)}
        </TextField>
                </Grid>
                <Button variant="contained" color="primary" className={classes.button} value="submit" type="submit">
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
export default withStyles(styles, { withTheme: true })(CoteForm )
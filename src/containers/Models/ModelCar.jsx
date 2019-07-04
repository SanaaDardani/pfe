import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Auxi from "../../hoc/Auxi";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ModelCarStyle from "./Modelcar.style";
import { Typography } from '@material-ui/core';
import {
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Label
} from "recharts";

// Action creators
import { fetchModels } from "../../redux/models/actions";
// Action creators
import { countAdsModel } from "../../redux/charts/actionModelsWithNumberOfAds";

class ModelCar extends Component {
  componentWillMount() {
    this.props.fetchModels(this.props.match.params.model);
    this.props.countAdsModel(this.props.match.params.model);
  }

  render() {
    const { classes, models, adsModel } = this.props;

    return (
      <Auxi>
           
        <Grid container className={classes.root}>
       
            <Grid item xs={6}>
            <Typography variant="h1" style={{fontSize:'20px', fontWeight:"bold", left:"10px"}}>
                le marché du : {this.props.match.params.model} au maroc
            </Typography>
                <BarChart
                width={600}
                height={500}
                data={adsModel}
                margin={{ top: 40,bottom: 5 }}
                
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="model">
                    <Label value="Modéles" offset={0} position="insideBottom" stroke="#8884d8" />
                </XAxis>
                <YAxis>
                    <Label value="Nombre Annonces" offset={10} position="insideTop" stroke="#8884d8" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="numberOfAds" fill="#26c6da" />
                </BarChart>
            </Grid>
            <Grid container item xs={6}>
                {models.map((model, index) => {
                    return (
                    <Grid item xs={3} key={index}>
                        <Card className={classes.card}>
                          <NavLink to={`/${model.model}`} className={classes.link}>
                              <CardContent className={classes.content}>
                              <h3 className={classes.stTitle}>{model.model}</h3>
                              <span className={classes.price}>{model.price} DH</span>
                              </CardContent>
                          </NavLink>
                        </Card>
                    </Grid>
                    );
                })}
            </Grid>
        </Grid>
      </Auxi>
    );
  }
}

ModelCar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
  models: state.models,
  adsModel: state.adsModel
});

export default connect(mapStateToprops,{ fetchModels, countAdsModel })(withStyles(ModelCarStyle)(ModelCar));

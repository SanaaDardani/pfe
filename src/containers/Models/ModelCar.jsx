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
import {
  ScatterChart,
  Scatter,
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
  Bar
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
          <Grid item xs={12}>
            <BarChart
              width={500}
              height={300}
              data={adsModel}
              margin={{ top: 20,bottom: 5 }}
              className={classes.barChart}
            
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="model" fill="#8884d8" /> */}
              <Bar dataKey="numberOfAds" fill="#82ca9d" />
            </BarChart>
          </Grid>
          {models.map((model, index) => {
            return (
              <Grid item xs={2} key={index}>
                <Card className={classes.card}>
                  <NavLink to={`/${model.model}`} className={classes.link}>
                    <CardContent>
                      <h3 className={classes.stTitle}>{model.model}</h3>
                      <span className={classes.price}>{model.price}</span>
                    </CardContent>
                  </NavLink>
                </Card>
              </Grid>
            );
          })}
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

export default connect(
  mapStateToprops,
  { fetchModels, countAdsModel }
)(withStyles(ModelCarStyle)(ModelCar));

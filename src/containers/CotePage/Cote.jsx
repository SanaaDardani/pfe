import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Legend} from 'recharts';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import coteStyle from './cote.syle';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
// Action creators
import { fetchCote } from "../../redux/charts/actionCote";

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// ];
const styles = () =>({
    card: {
      width: 100,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
class Cote extends Component {

componentDidMount(){
    const {match}=this.props
    console.log(match.params)
    this.props.onFetchCote(match.params.mark, match.params.modele,match.params.kilometre,
        match.params.carburant,match.params.date,match.params.ville);
    
}

onFetchCote = (mark, model,kilometre,carburant,date,ville) => {
    this.props.onFetchCote(mark, model,kilometre,carburant,date,ville);
}

  render() {
    const {cote} = this.props
    console.log(cote)
    return (
        <div style={{margin:'20px'}}>
            <Grid container>
                <Grid item xs={6}>
                    <LineChart
                        width={500}
                        height={300}
                        data={cote}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mileageMax" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="mileageMax" stroke="#82ca9d" />
                    </LineChart>
                </Grid>
                <Grid item xs={6}>
                <Card style={{width:'275px',margin:'0 auto'}}>
                    <CardContent>
                        <Typography style={{textAlign:'center'}} color="textSecondary" gutterBottom>
                            La Cote
                        </Typography>
                        <Typography variant="h5" component="h2">
                            price
                        </Typography>
                    </CardContent>
                    
                </Card>
            </Grid>
            </Grid>
        </div>
    )
  }
}

const mapStateToprops = state => ({
    cote: state.cote,
   
  });
  const mapActionsToProps = {
      onFetchCote : fetchCote
      
  }
export default connect(mapStateToprops,mapActionsToProps)(withStyles(styles)(Cote))


import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Legend,Label} from 'recharts';
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
import { axios } from 'axios';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
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
    const params = match.params;
    console.log(match.params)
    this.props.onFetchCote(
        params.mark, params.modele, params.kilometre, params.puissance, params.carburant, params.date, params.ville
    );
      
}

  render() {
    const {cote} = this.props
    console.log("ari liya haweya akhera")
    console.log(cote)
    return (
            <Grid container style={{margin: "40px 0 0 0"}}>
                <Grid item xs={6}>
                    <LineChart
                        width={800}
                        height={480}
                        data={cote[0]}
                        margin={{ left: 100, top: 40, bottom: 20 }}
                    >
                    <CartesianGrid/>
                    <XAxis dataKey="price" >
                        <Label value="Prix" offset={-4} position="insideBottom" stroke="#8884d8" />
                    </XAxis>
                    <YAxis>
                        <Label value="Kilométrage" offset={10}  position="top" stroke="#8884d8" />
                    </YAxis>
                    <Tooltip />
                    
                    <Line type="basis" dataKey="mileageMax" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="mileageMax" stroke="#82ca9d" /> */}
                    </LineChart>
                </Grid>
                <Grid item xs={6}>
                <Card style={{width:'275px',margin:'0 auto'}}>
                    <CardContent>
                        <Typography style={{textAlign:'center'}} color="textSecondary" gutterBottom>
                           <img width="100" height="100"
                                src="https://media.cdnandroid.com/10/10/a9/a3/imagen-bonprix-a-mode-online-shoppen-0thumb.jpg"/>
                        </Typography>
                        <hr />
                        <Typography variant="h5" component="h2" style={{textAlign: 'center', marginBottom:'40px', marginTop:'40px'}}>
                            { cote[1] } DH
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
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


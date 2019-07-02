import React, { PureComponent } from "react";
import { ScatterChart,Scatter,XAxis,YAxis,ZAxis,CartesianGrid,Tooltip,Legend}from "recharts";
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/img/logoCar.png';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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
}
})

const dataScater1 = [
  { x: 100, y: 200, z: 1900, details: {titre:'frefer', desc: 'jhkjhkhk', img:'jhgjhgjgj'} },
  { x: 120, y: 100, z: 260, details: {titre:'frefer', desc: 'jhkjhkhk', img:'jhgjhgjgj'} },
  { x: 170, y: 300, z: 400, details: {titre:'frefer', desc: 'jhkjhkhk', img:'jhgjhgjgj'} },
  { x: 140, y: 250, z: 280, details: {titre:'frefer', desc: 'jhkjhkhk', img:'jhgjhgjgj'} },
  { x: 150, y: 400, z: 500, details: {titre:'frefer', desc: 'jhkjhkhk', img:{logo} } },
  { x: 110, y: 280, z: 200, details: {titre:'frefer', desc: 'jhkjhkhk', img:'jhgjhgjgj'} },
  
];

  const CustomTooltip = (props) => {
      return (
        <div className='custom-tooltip'>
           <Paper className={props.paper}>
                <Typography variant="h6" gutterBottom>
                    data.details.titre
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
                <img src={logo} width="100" height="50" alt="img" />
            </Paper>
        </div>
       
      )
    }
class ModelsReporting extends PureComponent {
  render() {
    return (
        <>
          
            <Grid container>
            <Grid item xs={2}></Grid>              
                <Grid item xs={12}>
                    <ScatterChart width={900} height={300}
                        margin={{ top: 30,bottom: 20}} style={{textAlign:'center',width:'100%'}}>
                        <CartesianGrid strokeDasharray="3 3" />
                     
                        <XAxis dataKey="x" name="stature" unit="cm" />
                        <YAxis dataKey="y" name="weight" unit="kg" />
                        <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
                        <Legend />
                        <Scatter name="A school" data={dataScater1} fill="#8884d8" />
                    </ScatterChart>
                </Grid>
            </Grid>
        </>
    );
  }
}
export default withStyles(styles, { withTheme: true })(ModelsReporting);

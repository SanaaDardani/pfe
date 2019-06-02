import React, { PureComponent } from "react";
import { ScatterChart,Scatter,XAxis,YAxis,ZAxis,CartesianGrid,Tooltip,
        Legend,PieChart,Pie,Cell,BarChart,Bar }
    from "recharts";
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/img/logoCar.png';
const dataScater1 = [
  { x: 100, y: 200, z: 1900},
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  
];
const dataScater2 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 }
];
const dataScater3 = [
    { x: 210, y: 520, z: 571 },
    { x: 110, y: 250, z: 100 },
    { x: 547, y: 290, z: 250 },
    { x: 255, y: 321, z: 200 },
    { x: 578, y: 541, z: 260 },
    { x: 195, y: 145, z: 230 }
  ];

const   CustomTooltip = () => {
    return (
      <div className='custom-tooltip'>
            <img src={logo} width="100" height="50"/>
      </div>
    );
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
                        <Scatter name="B school" data={dataScater2} fill="#82ca9d" />
                        <Scatter name="c school" data={dataScater3} fill="#FF8042" />
                    </ScatterChart>
                </Grid>
            </Grid>
        </>
    );
  }
}
export default ModelsReporting;

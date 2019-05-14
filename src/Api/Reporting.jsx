import React, { PureComponent, Fragment } from "react";
import { ScatterChart,Scatter,XAxis,YAxis,ZAxis,CartesianGrid,Tooltip,
        Legend,PieChart,Pie,Sector,Cell,BarChart,Bar }
    from "recharts";
import Grid from '@material-ui/core/Grid';

const dataScater1 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 }
];
const dataScater2 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 }
];

const dataPie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({cx,cy,midAngle,innerRadius,outerRadius,percent,index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

const dataBar = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
  ];
class ModelsReporting extends PureComponent {
  render() {
    return (
        <>
            <Grid container>
            <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <BarChart width={500} height={300} data={dataBar} 
                        margin={{top: 30,bottom: 20 }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                </BarChart>
                </Grid>
                <Grid item xs={4}>
                    <PieChart width={500} height={300}>
                        <Pie
                            data={dataPie}
                            cx={300}
                            cy={150}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            { dataPie.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    </PieChart>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={12}>
                    <ScatterChart width={900} height={300}
                        margin={{ top: 30,bottom: 20}} style={{textAlign:'center',width:'100%'}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" name="stature" unit="cm" />
                        <YAxis dataKey="y" name="weight" unit="kg" />
                        <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="A school" data={dataScater1} fill="#8884d8" />
                        <Scatter name="B school" data={dataScater2} fill="#82ca9d" />
                    </ScatterChart>
                </Grid>
            </Grid>
        </>
    );
  }
}
export default ModelsReporting;

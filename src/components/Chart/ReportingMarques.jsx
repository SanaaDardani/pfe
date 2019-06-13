import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { connect } from "react-redux";

// Action creators
import { countAds } from "../../redux/charts/actionMarksWithNumberOfAds";


class ReportingMarques extends PureComponent {
  componentWillMount() {
    this.props.countAds();
  }
  
  renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill=""
        >
          {` ${value}`}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill=""
        >
          {`(Taux ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  }
  
  getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  state = {
    activeIndex: 0
  };

  data = this.props.data;
  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <PieChart width={400} height={270} style={{width:'100%'}}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={this.renderActiveShape}
          data={this.props.ads}
          cx={150}
          cy={140}
          innerRadius={60}
          outerRadius={80}
          fill={this.getRandomColor()}
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}
const mapStateToprops = state => ({
  ads: state.ads
});

export default connect(
  mapStateToprops,
  { countAds }
)(ReportingMarques);

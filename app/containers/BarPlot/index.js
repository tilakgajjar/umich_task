/**
 *
 * BarPlot
 *
 */

/* global Plotly:true */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectYearSelection from "containers/YearSelection/selectors";
import { plotData } from "data/plotData";

/* eslint-disable react/prefer-stateless-function */
export class BarPlot extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plotdata: []
    };
  }

  componentDidMount() {
    const plotdata = plotData();
    this.setState({ plotdata: plotdata });
    this.drawPlot();
  }

  componentDidUpdate() {
    this.drawPlot();
  }

  drawPlot() {
    //const plotdata = plotData();
    const { plotdata } = this.state;
    //const valueaArr = plotdata.map(val => val.value);
    //const arrAvg = (array) => array.reduce((a, b) => a + b) / array.length;
    //console.log(arrAvg(valueaArr));

    var layout = {
      title: 'U.S. Consumers Annual Spending',
      font: {
        family: 'Raleway, sans-serif',
        color: 'rgb(107, 107, 107)'
      },
      showlegend: false,
      showgrid: true,
      xaxis: {
        title: 'Year',
        tickangle: -45,
        tickfont: {
          size: 12,
          color: 'rgb(107, 107, 107)'
        }
      },
      yaxis: {
        title: 'Annual Spending',
        gridwidth: 1,
        tickfont: {
          size: 12,
          color: 'rgb(107, 107, 107)'
        }
      },
      bargap: 0.30,
    };

    var trace1 = {
      x: plotdata.map(val => val.year),
      y: plotdata.map(val => val.value),
      type: 'bar',
      marker: {
        color: 'rgba(222,45,38,0.8)'
      },
    };

    var data = [trace1];

    Plotly.react('barplot', data, layout);
  }

  render() {
    return (
      <div>
        <div id="barplot" />
      </div>
    );
  }
}

BarPlot.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  yearselection: makeSelectYearSelection()
});

const withConnect = connect(
  mapStateToProps,
  null
);

export default compose(withConnect)(BarPlot);

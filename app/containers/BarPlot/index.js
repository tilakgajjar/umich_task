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
import makeSelectDownloadSvg from "containers/DownloadSvg/selectors";
import { triggerDownload } from "containers/DownloadSvg/actions";
import { plotData } from "data/plotData";

const plotId = "barplot"
/* eslint-disable react/prefer-stateless-function */
export class BarPlot extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plotdata: []
    };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const plotdata = plotData();
    this.setState({ plotdata: plotdata });
    this.drawPlot();
  }

  componentDidUpdate() {
    if (this.props.downloadSVG) {
      this.downloadPlot();
      this.props.triggerDownload(plotId, false);
    }
    this.drawPlot();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    Plotly.Plots.resize(this.chart);
  }


  downloadPlot() {
    Plotly.downloadImage(
      this.chart,
      {
        format: 'svg',
        height: 500,
        width: 1400,
        filename: 'US_Consumer_Annual_Spending',
      }
    );
  }


  drawPlot() {
    const { plotdata } = this.state;
    const { startYear, endYear } = this.props.yearselection;
    const selectedYearData = plotdata.filter(val => val.year >= startYear && val.year <= endYear)

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
      bargap: 0.50,
    };

    var trace = {
      x: selectedYearData.map(val => val.year),
      y: selectedYearData.map(val => val.value),
      type: 'bar',
      marker: {
        color: 'rgba(222,45,38,0.8)'
      },
    };

    var data = [trace];

    Plotly.react('barplot', data, layout);
  }

  render() {

    return (
      <div>
        <div
          id="barplot"
          ref={(chart) => { this.chart = chart; }} />
      </div>
    );
  }
}

BarPlot.propTypes = {
  yearselection: PropTypes.object,
  downloadSVG: PropTypes.bool,
};

const mapStateToProps = () => createStructuredSelector({
  yearselection: makeSelectYearSelection(),
  downloadSVG: makeSelectDownloadSvg(plotId)
});

function mapDispatchToProps(dispatch) {
  return {
    triggerDownload: (plotId, download) => dispatch(triggerDownload(plotId, download)),
  };
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(BarPlot);

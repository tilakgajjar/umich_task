/**
 *
 * YearSelection
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { Dropdown, Grid } from 'semantic-ui-react';
import injectReducer from "utils/injectReducer";
import makeSelectYearSelection from "./selectors";
import reducer from "./reducer";
import { plotData } from 'data/plotData';
import { updateYear } from './actions';
import _ from 'lodash';

/* eslint-disable react/prefer-stateless-function */
export class YearSelection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      "startYear": this.props.yearselection.startYear,
      "endYear": this.props.yearselection.endYear,
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(key, value) {
    this.setState({ [key]: value });
    this.props.updateYear({ [key]: value });
  }


  render() {
    const { startYear, endYear } = this.props.yearselection;
    const plotdata = plotData();

    const startYearDropdown = plotdata.filter(val => val.year < endYear).reduce(function (result, item, index, array) {
      result[index] = { 'key': index, 'value': item.year, text: item.year };
      return result;
    }, []);

    const endYearDropdown = plotdata.filter(val => val.year > startYear).reduce(function (result, item, index, array) {
      result[index] = { 'key': index, 'value': item.year, text: item.year };
      return result;
    }, []);

    return (
      <div>
        <Grid columns={2}>
          <Grid.Row >
            <Grid.Column>
              <h5>Start Year</h5>
              <Dropdown
                placeholder='Start Year'
                search
                selection
                compact
                options={startYearDropdown}
                name="startYear"
                value={this.state.startYear}
                onChange={(e, { value }) => this.handleChange("startYear", value)}
              />
            </Grid.Column>
            <Grid.Column>
              <h5>End Year</h5>
              <Dropdown
                placeholder='End Year'
                search
                selection
                compact
                options={endYearDropdown}
                name="endYear"
                value={this.state.endYear}
                onChange={(e, { value }) => this.handleChange("endYear", value)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

YearSelection.propTypes = {
  yearselection: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  yearselection: makeSelectYearSelection()
});

function mapDispatchToProps(dispatch) {
  return {
    updateYear: (value) => dispatch(updateYear(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "yearSelection", reducer });

export default compose(
  withReducer,
  withConnect
)(YearSelection);

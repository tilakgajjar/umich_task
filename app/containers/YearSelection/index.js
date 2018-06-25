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
import { Dropdown } from 'semantic-ui-react';
import injectReducer from "utils/injectReducer";
import makeSelectYearSelection from "./selectors";
import reducer from "./reducer";
import { plotData } from 'data/plotData';

/* eslint-disable react/prefer-stateless-function */
export class YearSelection extends React.PureComponent {
  render() {
    const plotdata = plotData();

    const yeardata = plotdata.reduce(function (result, item, index, array) {
      result[index] = { 'key': index, 'value': item.year, text: item.year };
      return result;
    }, [])


    return (
      <div>

        <Dropdown
          placeholder='Start Year'
          search
          selection
          compact
          options={yeardata}
        />

        <Dropdown
          placeholder='End Year'
          search
          selection
          compact
          options={yeardata}
        />
      </div>
    );
  }
}

YearSelection.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  yearselection: makeSelectYearSelection()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
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

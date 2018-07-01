/**
 *
 * DownloadSvg
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { Button } from 'semantic-ui-react';
import injectReducer from "utils/injectReducer";
import makeSelectDownloadSvg from "./selectors";
import reducer from "./reducer";
import { triggerDownload } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class DownloadSvg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.downloadSVG = this.downloadSVG.bind(this);
  }

  downloadSVG() {
    this.props.triggerDownload(this.props.plotId, true);
  }

  render() {
    return (
      <div style={{ marginTop: '10%' }}>
        <Button
          secondary
          fluid
          size="medium"
          onClick={() => this.downloadSVG()}>
          Download SVG
        </Button>
      </div>
    );
  }
}

DownloadSvg.propTypes = {
  downloadsvg: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  downloadsvg: makeSelectDownloadSvg()
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

const withReducer = injectReducer({ key: "downloadSvg", reducer });

export default compose(
  withReducer,
  withConnect
)(DownloadSvg);

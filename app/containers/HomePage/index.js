/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import BarPlot from 'containers/BarPlot/Loadable'
import YearSelection from 'containers/YearSelection/Loadable'
import DownloadSvg from 'containers/DownloadSvg/Loadable'
import { Segment, Grid, Divider } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {

  render() {
    return (
      <div>
        <Divider horizontal style={{ marginTop: '2em' }}>
          University of Michigan - Task
          </Divider>
        <Segment style={{ marginTop: '4em' }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <Grid textAlign="center">
                  <Grid.Row>
                    <DownloadSvg plotId="barplot" />
                  </Grid.Row>
                  <Divider fitted style={{ marginTop: '10%' }} />
                  <Grid.Row>
                    <YearSelection />
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column width={13}>
                <BarPlot />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div >
    )
  }
}

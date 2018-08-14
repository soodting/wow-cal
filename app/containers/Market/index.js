import React, { Component, Fragment } from 'react'
import { Row, Column } from 'glud-component'
import { connectRedux } from '../../helpers'
import * as marketAction from '../../actions/marketAction'
import Headers from '../Headers'

const mapStateToProps = (state) => {
  return { market: state.market }
}

// Action
const actions = {
  ...marketAction
}

@connectRedux(mapStateToProps, actions)
export default class Market extends Component {
  render () {
    // console.log(this.props)
    // console.log(actions.getMarket())
    return (
      <Fragment>
        <Headers name='market' />
        <Row>
          <Column D={12}>Market</Column>
        </Row>
      </Fragment>
    )
  }
}

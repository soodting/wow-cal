import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default (mapState, actions) => (Component) => {
  const mapDispatchToProps = (dispatch) => {
    if (actions) {
      return {
        actions: bindActionCreators(actions, dispatch)
      }
    }

    return {
      dispatch
    }
  }

  return connect(mapState, mapDispatchToProps)((props) => (
    <Component {...props} />
  ))
}

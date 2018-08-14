import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'

export default (props) => (
  <Fragment>{renderRoutes(props.route.routes)}</Fragment>
)

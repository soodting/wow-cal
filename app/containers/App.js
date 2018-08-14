import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'

export default (props) => (
  <Fragment>
    <div className='container'>{renderRoutes(props.route.routes)}</div>
  </Fragment>
)

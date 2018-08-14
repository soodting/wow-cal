import React from 'react'
import Dynamic from './components/Dynamic'
import App from './containers/App'

const Home = () => import(/* webpackChunkName: "home", webpackPrefetch: true */ './containers/Home')

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Dynamic moduleProvider={Home} />
      }
    ]
  }
]

export default routes

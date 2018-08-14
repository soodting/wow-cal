import React from 'react'
import Dynamic from './components/Dynamic'
import App from './containers/App'

const Home = () => import('./containers/Home')
const Market = () => import('./containers/Market/index')
const Vga = () => import('./containers/Vga/index')

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Dynamic moduleProvider={Home} />
      },
      {
        path: '/market',
        exact: true,
        component: () => <Dynamic moduleProvider={Market} />
      },
      {
        path: '/vga',
        exact: true,
        component: () => <Dynamic moduleProvider={Vga} />
      }
    ]
  }
]

export default routes

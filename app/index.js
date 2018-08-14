import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import 'glud-component/build/style.css'
import './style/style.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

const rootEl = document.getElementById('app')
render(<Root />, rootEl)

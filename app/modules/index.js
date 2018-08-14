import { combineReducers } from 'redux'
import demo from './demo'
import market from './market'
import vga from './vga'
import all from './all'

export default combineReducers({
  demo: demo.state,
  market: market.state,
  vga: vga.state,
  all: all.state
})

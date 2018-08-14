import { createModule } from 'redux-modux'

const initialState = {
  market: ''
}

const updateMarket = (state, payload) => ({
  ...state,
  market: payload
})

const handlers = {
  updateMarket
}

export default createModule(initialState, handlers)

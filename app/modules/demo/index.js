import { createModule } from 'redux-modux'

const initialState = {
  name: ''
}

const updateName = (state, payload) => ({
  ...state,
  name: payload
})

const handlers = {
  updateName
}

export default createModule(initialState, handlers)

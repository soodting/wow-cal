import { createModule } from 'redux-modux'

const initialState = {
  txtLoad: 'Loading...',
  showModal: false,
  countDownApi: 0
}

const updateLoading = (state, payload) => ({
  ...state,
  txtLoad: payload
})

const updateShowModal = (state, payload) => ({
  ...state,
  showModal: payload
})

const updateCountDownApi = (state, payload) => ({
  ...state,
  countDownApi: payload
})

const handlers = {
  updateLoading,
  updateShowModal,
  updateCountDownApi
}

export default createModule(initialState, handlers)

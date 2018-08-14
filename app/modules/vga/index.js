import { createModule } from 'redux-modux'

const initialState = {
  useVga: { u1070: 0, u1050: 0, u1030: 0, u1060: 0 },
  dataCals: [],
  orderCalTable: { type: 'name', order: 'asc' },
  status: 0
}

const updateUseVga = (state, payload) => ({
  ...state,
  useVga: payload
})
const updateDataCal = (state, payload) => ({
  ...state,
  dataCals: payload
})
const updateOrderCalTable = (state, payload) => ({
  ...state,
  orderCalTable: payload
})
const updateStatus = (state, payload) => ({
  ...state,
  status: payload
})

const handlers = {
  updateUseVga,
  updateDataCal,
  updateOrderCalTable,
  updateStatus
}

export default createModule(initialState, handlers)

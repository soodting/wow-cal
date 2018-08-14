import vgaModule from '../modules/vga'
import allModule from '../modules/all'
import { callApis } from '../helpers/callApi'
import { urlMarkets, marketApis } from '../helpers/marketApi'
import { urlPools, poolApis } from '../helpers/poolApi'

const updateVgas = (useVga) => (dispatch) => {
  dispatch(vgaModule.actions.updateUseVga(useVga))
}

const updateDataCal = (dataCal) => (dispatch) => {
  dispatch(vgaModule.actions.updateDataCal(dataCal))
}
const updateOrderCalTable = (orderBy) => (dispatch) => {
  dispatch(vgaModule.actions.updateOrderCalTable(orderBy))
}
const callApi = (useVga) => async (dispatch) => {
  dispatch(allModule.actions.updateShowModal(true))
  let marketList = []
  let poolList = []
  let countDownApi = urlMarkets.length + urlPools.length
  dispatch(allModule.actions.updateCountDownApi(countDownApi))
  for (let market of urlMarkets) {
    dispatch(allModule.actions.updateLoading('Loading...' + market.name + ' '))
    marketList.push(await marketApis(market))
    countDownApi -= 1
    dispatch(allModule.actions.updateCountDownApi(countDownApi))
  }
  for (let pool of urlPools) {
    dispatch(allModule.actions.updateLoading('Loading...' + pool.name + ' '))
    poolList.push(await poolApis(pool))
    countDownApi -= 1
    dispatch(allModule.actions.updateCountDownApi(countDownApi))
  }
  const vgas = await callApis(marketList, poolList, useVga)
  dispatch(vgaModule.actions.updateDataCal(vgas))
  dispatch(allModule.actions.updateShowModal(false))
}

export { updateVgas, updateDataCal, updateOrderCalTable, callApi }

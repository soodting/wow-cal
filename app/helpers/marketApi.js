import { fetchCallApi } from '../api/fetchers'

const urlMarkets = [
  { name: 'garviex', url: 'https://graviex.net:443//api/v2/tickers.json' },
  { name: 'cryptoB', url: 'https://api.crypto-bridge.org/api/v1/ticker' },
  { name: 'stock', url: 'https://app.stocks.exchange/api2/prices' }
]

const marketApis = async (market) => {
  let result = {}
  let checkApi = true
  while (checkApi) {
    let resultMarket = await fetchCallApi({ url: market.url })
    if (resultMarket.status === 200) {
      let dataList = {}
      if (market.name === 'garviex') {
        dataList = setMarketJsonGarv(resultMarket.json)
      } else if (market.name === 'cryptoB') {
        dataList = setMarketJsonCryptoB(resultMarket.json)
      } else if (market.name === 'stock') {
        dataList = setMarketJsonStock(resultMarket.json)
      }
      result = { name: market.name, dataList: dataList }
      checkApi = false
    } else if (resultMarket.status === 503 || resultMarket.status === 0) {
    } else {
      checkApi = false
    }
  }
  return result
}

const setMarketJsonGarv = (json) => {
  let result = {}
  for (let data of Object.keys(json)) {
    result[data] = json[data].ticker.buy
  }
  return result
}

const setMarketJsonCryptoB = (json) => {
  let result = {}
  let dataTemp
  for (let data of Object.keys(json)) {
    dataTemp = json[data].id.split('_')
    if (dataTemp[1] === 'BTC') {
      result[dataTemp[0].toLowerCase() + dataTemp[1].toLowerCase()] = json[data].last
    }
  }
  return result
}

const setMarketJsonStock = (json) => {
  let result = {}
  let dataTemp
  for (let data of json) {
    dataTemp = data.market_name.split('_')
    if (dataTemp[1] === 'BTC') {
      result[dataTemp[0].toLowerCase() + dataTemp[1].toLowerCase()] = data.buy
    }
  }
  return result
}

export { marketApis, urlMarkets }

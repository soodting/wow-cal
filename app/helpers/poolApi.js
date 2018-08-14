import { fetchCallApi } from '../api/fetchers'

const urlPools = [
  { name: 'bsod', url: 'http://api.bsod.pw/api/currencies' },
  { name: 'gos', url: 'https://gos.cx/api/currencies' },
  { name: 'ang', url: 'http://angrypool.com/api/currencies' },
  { name: 'asia', url: 'https://asiapool.trade/api/currencies' },
  { name: 'cvm', url: 'https://cvmpool.pw/api/currencies' }

]

const rewardList = {}

const setReward = (symbol, reward) => {
  if (reward) {
    if (!rewardList[symbol]) {
      rewardList[symbol] = reward
    }
  }
}

const poolDetail = (json) => {
  let result = []
  for (let data of Object.keys(json)) {
    setReward(data, json[data].block_reward ? json[data].block_reward : json[data].reward)
  }
  for (let data of Object.keys(json)) {
    result.push({
      symbol: data,
      algo: json[data].algo,
      reward: rewardList[data] ? rewardList[data] : 0,
      net_hashrate: json[data].network_hashrate,
      hashrate: json[data].hashrate,
      blocks24: json[data]['24h_blocks']
    })
  }
  return result
}

const poolApis = async (pool) => {
  let result = {}
  let checkApi = true
  while (checkApi) {
    let resultVga = await fetchCallApi({ url: pool.url })
    if (resultVga.status === 200) {
      result = { name: pool.name, dataList: poolDetail(resultVga.json) }
      checkApi = false
    }
  }
  return result
}

export { poolApis, urlPools }

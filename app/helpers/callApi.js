const dataVGA = {
  u1070: {
    neoscrypt: 1100000,
    nist5: 39940000,
    skein: 532870000,
    xevan: 2990000,
    lyra2v2: 34500000,
    lyra2z: 1510000,
    x16r: 10000000,
    c11: 13000000,
    phi1612: 17900000,
    skunk: 28000000,
    keccak: 685000000,
    tribus: 44000000
  },
  u1060: {
    neoscrypt: 562000,
    nist5: 24000000,
    skein: 281000000,
    xevan: 2170000,
    lyra2v2: 21950000,
    lyra2z: 1000000,
    x16r: 6500000,
    c11: 8600000,
    phi1612: 11000000,
    skunk: 15159000,
    keccak: 423000000,
    tribus: 27000000
  },
  u1050: {
    neoscrypt: 366570,
    nist5: 14490000,
    skein: 148000000,
    xevan: 1110000,
    lyra2v2: 10700000,
    lyra2z: 580000,
    x16r: 2900000,
    c11: 4375000,
    phi1612: 5500000,
    skunk: 7515000,
    keccak: 215000000,
    tribus: 15000000
  },
  u1030: {
    neoscrypt: 206800,
    nist5: 8040000,
    skein: 100000000,
    xevan: 594000,
    lyra2v2: 6190000,
    lyra2z: 320000,
    x16r: 2000000,
    c11: 2550000,
    phi1612: 3200000,
    skunk: 5700000,
    keccak: 163000000,
    tribus: 9000000
  }
}

const getDataCalObj = async (marketInfoList, poolInfoList, useVGA) => {
  const dataUse = {
    neoscrypt:
      dataVGA.u1070.neoscrypt * useVGA.u1070 +
      dataVGA.u1060.neoscrypt * useVGA.u1060 +
      dataVGA.u1050.neoscrypt * useVGA.u1050 +
      dataVGA.u1030.neoscrypt * useVGA.u1030,
    nist5:
      dataVGA.u1070.nist5 * useVGA.u1070 +
      dataVGA.u1060.nist5 * useVGA.u1060 +
      dataVGA.u1050.nist5 * useVGA.u1050 +
      dataVGA.u1030.nist5 * useVGA.u1030,
    skein:
      dataVGA.u1070.skein * useVGA.u1070 +
      dataVGA.u1060.skein * useVGA.u1060 +
      dataVGA.u1050.skein * useVGA.u1050 +
      dataVGA.u1030.skein * useVGA.u1030,
    xevan:
      dataVGA.u1070.xevan * useVGA.u1070 +
      dataVGA.u1060.xevan * useVGA.u1060 +
      dataVGA.u1050.xevan * useVGA.u1050 +
      dataVGA.u1030.xevan * useVGA.u1030,
    lyra2v2:
      dataVGA.u1070.lyra2v2 * useVGA.u1070 +
      dataVGA.u1060.lyra2v2 * useVGA.u1060 +
      dataVGA.u1050.lyra2v2 * useVGA.u1050 +
      dataVGA.u1030.lyra2v2 * useVGA.u1030,
    lyra2z:
      dataVGA.u1070.lyra2z * useVGA.u1070 +
      dataVGA.u1060.lyra2z * useVGA.u1060 +
      dataVGA.u1050.lyra2z * useVGA.u1050 +
      dataVGA.u1030.lyra2z * useVGA.u1030,
    x16r:
      dataVGA.u1070.x16r * useVGA.u1070 +
      dataVGA.u1060.x16r * useVGA.u1060 +
      dataVGA.u1050.x16r * useVGA.u1050 +
      dataVGA.u1030.x16r * useVGA.u1030,
    c11:
      dataVGA.u1070.c11 * useVGA.u1070 +
      dataVGA.u1060.c11 * useVGA.u1060 +
      dataVGA.u1050.c11 * useVGA.u1050 +
      dataVGA.u1030.c11 * useVGA.u1030,
    phi1612:
      dataVGA.u1070.phi1612 * useVGA.u1070 +
      dataVGA.u1060.phi1612 * useVGA.u1060 +
      dataVGA.u1050.phi1612 * useVGA.u1050 +
      dataVGA.u1030.phi1612 * useVGA.u1030,
    skunk:
      dataVGA.u1070.skunk * useVGA.u1070 +
      dataVGA.u1060.skunk * useVGA.u1060 +
      dataVGA.u1050.skunk * useVGA.u1050 +
      dataVGA.u1030.skunk * useVGA.u1030,
    keccak:
      dataVGA.u1070.keccak * useVGA.u1070 +
      dataVGA.u1060.keccak * useVGA.u1060 +
      dataVGA.u1050.keccak * useVGA.u1050 +
      dataVGA.u1030.keccak * useVGA.u1030,
    tribus:
      dataVGA.u1070.tribus * useVGA.u1070 +
      dataVGA.u1060.tribus * useVGA.u1060 +
      dataVGA.u1050.tribus * useVGA.u1050 +
      dataVGA.u1030.tribus * useVGA.u1030
  }

  let result = []
  let number = 0
  for (let pool of Object.keys(poolInfoList)) {
    for (let data of Object.keys(poolInfoList[pool].dataList)) {
      if (undefined === poolInfoList[pool].dataList[data].symbol) {
        continue
      }
      result.push({
        id: number,
        name: poolInfoList[pool].dataList[data].symbol,
        algo: poolInfoList[pool].dataList[data].algo,
        reward: parseFloat(poolInfoList[pool].dataList[data].reward).toFixed(2),
        netHash: poolInfoList[pool].dataList[data].net_hashrate,
        market: [],
        pName: poolInfoList[pool].name,
        pHR: poolInfoList[pool].dataList[data].hashrate,
        block24: poolInfoList[pool].dataList[data].blocks24,
        coinPersent: getCoinPersent(dataUse, poolInfoList[pool].dataList[data]),
        coin24: (getCoinPersent(dataUse, poolInfoList[pool].dataList[data]) *
          poolInfoList[pool].dataList[data].reward *
          poolInfoList[pool].dataList[data].blocks24 /
          100).toFixed(8)
      })
      number += 1
    }
  }

  for (let data of result) {
    for (let market of marketInfoList) {
      if (undefined !== market.dataList[data.name.toLowerCase() + 'btc']) {
        data.market.push({
          name: market.name,
          buy: parseFloat(market.dataList[data.name.toLowerCase() + 'btc']).toFixed(8)
        })
      }
    }

    if (undefined !== data.market[0]) {
      data.btc24 = (data.market[0].buy * data.reward * data.coinPersent * data.block24 / 100).toFixed(8)
    } else {
      data.btc24 = (0).toFixed(8)
    }
  }
  return result
}

const getCoinPersent = (use, pool) => {
  let result = 0
  if (undefined !== use[pool.algo]) {
    result = use[pool.algo] * 100 / (pool.hashrate + use[pool.algo])
  }
  return result
}

const callApis = async (marketList, poolList, useVga) => {
  let result = await getDataCalObj(marketList, poolList, useVga)
  return result
}

export { callApis }

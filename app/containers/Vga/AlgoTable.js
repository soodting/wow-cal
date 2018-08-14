import React, { Component } from 'react'
import { Row, Column, Table } from 'glud-component'
class AlgoTable extends Component {
  algoList = [
    'neoscrypt',
    'nist5',
    'skein',
    'xevan',
    'lyra2v2',
    'lyra2z',
    'x16r',
    'c11',
    'phi1612',
    'skunk',
    'keccak',
    'tribus'
  ]

  dataVGA = {
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

  calVga = (useVage) => {
    let result = {}

    const dataVGA = this.dataVGA
    const algoList = this.algoList
    for (let algo of algoList) {
      if (useVage.u1070 > 0) {
        if (result[algo]) {
          result[algo] = result[algo] + dataVGA.u1070[algo] * useVage.u1070
        } else {
          result[algo] = dataVGA.u1070[algo] * useVage.u1070
        }
      }
      if (useVage.u1060 > 0) {
        if (result[algo]) {
          result[algo] = result[algo] + dataVGA.u1060[algo] * useVage.u1060
        } else {
          result[algo] = dataVGA.u1060[algo] * useVage.u1060
        }
      }
      if (useVage.u1050 > 0) {
        if (result[algo]) {
          result[algo] = result[algo] + dataVGA.u1050[algo] * useVage.u1050
        } else {
          result[algo] = dataVGA.u1050[algo] * useVage.u1050
        }
      }
      if (useVage.u1030 > 0) {
        if (result[algo]) {
          result[algo] = result[algo] + dataVGA.u1030[algo] * useVage.u1030
        } else {
          result[algo] = dataVGA.u1030[algo] * useVage.u1030
        }
      }
    }
    return result
  }

  algoTable = (useVage) => {
    let result = []
    const calVga = this.calVga(useVage)
    for (let vga of Object.keys(calVga)) {
      result.push({ name: vga, val: calVga[vga] })
    }
    return result
  }

  render () {
    const { useVage } = this.props
    const algoTable = this.algoTable(useVage)
    const elementTD = (data) => (
      <tr key={`td-${data.name}`}>
        <td>{data.name}</td>
        <td>{data.val}</td>
      </tr>
    )
    return (
      <div>
        {algoTable && (
          <Row>
            <Column D={3} L={6} M={12}>
              <Table dataList={algoTable} elementTD={elementTD} />
            </Column>
          </Row>
        )}
      </div>
    )
  }
}

export default AlgoTable

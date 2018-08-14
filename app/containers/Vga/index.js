import React, { Component, Fragment } from 'react'
import { Row, Column, Box, Button, ButtonGroup, InputWithAddons, Input, Table, Modal } from 'glud-component'
import { connectRedux } from '../../helpers'
import * as vgaAction from '../../actions/vgaAction'
import * as allAction from '../../actions/action'
import AlgoTable from './AlgoTable'
import Headers from '../Headers'
import _ from 'lodash'
const Item = InputWithAddons.Item

const mapStateToProps = (state) => {
  return { vga: state.vga, all: state.all }
}

// Action
const actions = {
  ...vgaAction,
  setShowModal: allAction.setShowModal
}

@connectRedux(mapStateToProps, actions)
export default class Vga extends Component {
  handleOpenModal = () => {
    this.props.actions.setShowModal(true)
  }

  onCloseModal = () => {}

  handleCloseModal = () => {
    this.props.actions.setShowModal(false)
  }

  userClick = (user) => {
    let useVga = {}
    if (user === 'TT') {
      useVga = {
        u1070: 6,
        u1060: 0,
        u1050: 0,
        u1030: 0
      }
    } else if (user === 'ST') {
      useVga = {
        u1070: 0,
        u1060: 0,
        u1050: 9,
        u1030: 6
      }
    } else if (user === 'CT') {
      useVga = {
        u1070: 0,
        u1060: 0,
        u1050: 12,
        u1030: 0
      }
    }
    this.props.actions.updateVgas(useVga)
  }

  sortTable = (data) => {
    const { dataCals, orderCalTable } = this.props.vga
    if (orderCalTable.type === data) {
      if (orderCalTable.order === 'asc') {
        this.props.actions.updateOrderCalTable({ type: data, order: 'dese' })
        this.props.actions.updateDataCal(_.orderBy(dataCals, [ data ], [ 'ase' ]))
      } else {
        this.props.actions.updateOrderCalTable({ type: data, order: 'asc' })
        this.props.actions.updateDataCal(_.orderBy(dataCals, [ data ], [ 'desc' ]))
      }
    } else {
      this.props.actions.updateOrderCalTable({ type: data, order: 'asc' })
      this.props.actions.updateDataCal(_.orderBy(dataCals, [ data ], [ 'desc' ]))
    }
  }

  getCalculateCallApi = (useVga) => {
    // Loading.open({
    //   label: 'Loading please wait..'
    // })
    this.props.actions.callApi(useVga)
  }

  vgaTxtChange (e, name) {
    const { useVga } = this.props.vga
    if (name === '1070') {
      useVga.u1070 = e.target.value !== '' ? Number(e.target.value) : e.target.value
    } else if (name === '1050') {
      useVga.u1050 = e.target.value !== '' ? Number(e.target.value) : e.target.value
    } else if (name === '1030') {
      useVga.u1030 = e.target.value !== '' ? Number(e.target.value) : e.target.value
    } else if (name === '1060') {
      useVga.u1060 = e.target.value !== '' ? Number(e.target.value) : e.target.value
    }
    this.props.actions.updateVgas(useVga)
  }

  vgaTxtBlur (e, name) {
    if (e.target.value === '') {
      const { useVga } = this.props.vga
      if (name === '1070') {
        useVga.u1070 = 0
      } else if (name === '1050') {
        useVga.u1050 = 0
      } else if (name === '1030') {
        useVga.u1030 = 0
      } else if (name === '1060') {
        useVga.u1060 = 0
      }
      this.props.actions.updateVgas(useVga)
    }
  }

  render () {
    // Loading.close()
    const { useVga, dataCals } = this.props.vga
    const { txtLoad, showModal, countDownApi } = this.props.all
    const elementHead = () => (
      <tr>
        <th>
          <div className='th-div-click' onClick={(e) => this.sortTable('name')}>
            name
          </div>
        </th>
        <th>
          <div className='th-div-click' onClick={(e) => this.sortTable('algo')}>
            algo
          </div>
        </th>
        <th>rewark</th>
        <th>market</th>
        <th>Pname</th>
        <th>block/24</th>
        <th>coin/24</th>
        <th>
          <div className='th-div-click' onClick={(e) => this.sortTable('btc24')}>
            btc/24
          </div>
        </th>
      </tr>
    )

    const markets = (markets, id) => {
      let retult = []
      for (let market of markets) {
        retult.push(
          <div key={`${market.name}-${id}`}>
            {market.name}:{market.buy}
          </div>
        )
      }
      return retult
    }

    const elementTD = (data) => (
      <tr key={`td-${data.id}`}>
        <td>{data.name}</td>
        <td>{data.algo}</td>
        <td>{data.reward}</td>
        <td>{markets(data.market, data.id)}</td>
        <td>{data.pName}</td>
        <td>{data.block24}</td>
        <td>{data.coin24}</td>
        <td>{data.btc24}</td>
      </tr>
    )

    const fieldsForSearch = {
      name: true,
      algo: true,
      pName: true
    }
    return (
      <Fragment>
        <Modal title='Modal' open={showModal} onClose={() => this.onCloseModal()}>
          <Modal.Content>
            {txtLoad}-{countDownApi}
          </Modal.Content>
        </Modal>

        <Headers name='vga' />
        <Row>
          <Column D={12} L={12} M={12}>
            <Box>
              <ButtonGroup>
                <Button secondary onClick={(e) => this.userClick('TT')}>
                  TT
                </Button>
                <Button secondary onClick={(e) => this.userClick('ST')}>
                  ST
                </Button>
                <Button secondary onClick={(e) => this.userClick('CT')}>
                  CT
                </Button>
              </ButtonGroup>
              <br />
              <Row>
                <Column D={3} L={6} M={12}>
                  <Row>
                    <Column D={6} L={6} M={12}>
                      <InputWithAddons>
                        <Item>
                          <Button isStatic>1070</Button>
                        </Item>
                        <Item expanded>
                          <Input
                            onlyContain
                            value={'' + useVga.u1070}
                            onChange={(e) => this.vgaTxtChange(e, '1070')}
                            onBlur={(e) => this.vgaTxtBlur(e, '1070')}
                          />
                        </Item>
                      </InputWithAddons>
                    </Column>
                    <Column D={6} L={6} M={12}>
                      <InputWithAddons>
                        <Item>
                          <Button isStatic>1060</Button>
                        </Item>
                        <Item expanded>
                          <Input
                            onlyContain
                            value={'' + useVga.u1060}
                            onChange={(e) => this.vgaTxtChange(e, '1060')}
                            onBlur={(e) => this.vgaTxtBlur(e, '1060')}
                          />
                        </Item>
                      </InputWithAddons>
                    </Column>
                  </Row>
                </Column>
                <Column D={3} L={6} M={12}>
                  <Row>
                    <Column D={6} L={6} M={12}>
                      <InputWithAddons>
                        <Item>
                          <Button isStatic>1050</Button>
                        </Item>
                        <Item expanded>
                          <Input
                            onlyContain
                            value={'' + useVga.u1050}
                            onChange={(e) => this.vgaTxtChange(e, '1050')}
                            onBlur={(e) => this.vgaTxtBlur(e, '1050')}
                          />
                        </Item>
                      </InputWithAddons>
                    </Column>
                    <Column D={6} L={6} M={12}>
                      <InputWithAddons>
                        <Item>
                          <Button isStatic>1030</Button>
                        </Item>
                        <Item expanded>
                          <Input
                            onlyContain
                            value={'' + useVga.u1030}
                            onChange={(e) => this.vgaTxtChange(e, '1030')}
                            onBlur={(e) => this.vgaTxtBlur(e, '1030')}
                          />
                        </Item>
                      </InputWithAddons>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <br />
              <AlgoTable useVage={useVga} />
              <br />
              <Button secondary onClick={(e) => this.getCalculateCallApi(useVga)}>
                Calculate
              </Button>
            </Box>
          </Column>
        </Row>
        <br />
        <Row>
          <Column D={12} L={12} M={12}>
            <Box>
              {dataCals !== {} && (
                <Table
                  dataList={dataCals}
                  elementHead={elementHead}
                  elementTD={elementTD}
                  fieldsForSearch={fieldsForSearch}
                  placeholderSearch='Search to filter data'
                />
              )}
            </Box>
          </Column>
        </Row>
      </Fragment>
    )
  }
}

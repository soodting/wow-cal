import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Headers extends Component {
  menuItemList = (name) => {
    const menuList = [ { name: 'market', link: '/market' }, { name: 'vga', link: '/vga' } ]
    let result = []
    for (let menu of menuList) {
      result.push(
        <div key={menu.name} className={'toggle-menu ' + (name === menu.name && 'active')}>
          <Link to={menu.link}>{menu.name}</Link>
        </div>
      )
    }
    return result
  }

  render () {
    const { name } = this.props
    return (
      <Fragment>
        <div className='web-header'>{this.menuItemList(name)}</div>
      </Fragment>
    )
  }
}

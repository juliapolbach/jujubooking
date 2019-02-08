import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import HeaderRow from './HeaderRow'
import { scapeRoomList } from '../apiMock'
import { Cell } from '../styledComponents/table'

class Table extends Component {
  static renderHeaders (headers) {
    return (
      headers.map((header, index) =>
        <Cell key={index}>{header}</Cell>
      )
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      headers: ['scape', 'sala', 'hora', '']
    }
  }

  render () {
    return (
      <div>
        <HeaderRow headers={this.state.headers}/>
        {scapeRoomList.map((scapeRoom, index) =>
          (<Row scapeRoomName={scapeRoom.scapeRoomName} rooms={scapeRoom.rooms} key={index} />))}
      </div>
    )
  }
}

Table.propTypes = {}

export default Table

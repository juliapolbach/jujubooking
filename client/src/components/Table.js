import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import { Th, Tr } from '../styledComponents/table'
import { scapeRoomList } from '../apiMock'

class Table extends Component {
  static renderHeaders (headers) {
    return (<tr>
      {headers.map((header, index) =>
        <th key={index}>{header}</th>
      )}
    </tr>
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      headers: ['scape', 'sala', 'hora']
    }
  }

  render () {
    return (
      <table>
        <thead>{Table.renderHeaders(this.state.headers)}</thead>
        <tbody>{scapeRoomList.map((scapeRoom, index) =>
          (<Row scapeRoomName={scapeRoom.scapeRoomName} rooms={scapeRoom.rooms} key={index} />))}</tbody>
      </table>
    )
  }
}

Table.propTypes = {}

export default Table

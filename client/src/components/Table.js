import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import { Th, Tr } from '../styledComponents/table'
import { scapeRoomList } from '../apiMock'

class Table extends Component {
  static renderHeaders (headers) {
    return (<Tr>
      {headers.map((header, index) =>
        <Th key={index}>{header}</Th>
      )}
    </Tr>
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      headers: ['sala', 'scape', 'hora', 'dia', 'dirección', 'personas', 'dificultad']
    }
  }

  render () {
    return (
      <table>
        <thead>{Table.renderHeaders(this.state.headers)}</thead>
        <tbody>{scapeRoomList.map((scapeRoom, index) =>
          (<Row scapeRoom={scapeRoom} index={index} />))}</tbody>
      </table>
    )
  }
}

Table.propTypes = {}

export default Table

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RowDiv, Cell } from '../styledComponents/table'

class Row extends Component {
  constructor (props) {
    super(props)
    this.roomRow = this.roomRow.bind(this)
  }

  roomRow (room) {
    return (<React.Fragment>
      {room.availability.map((available, index) => (
        (<RowDiv key={index}>
          <Cell>{this.props.scapeRoomName}</Cell>
          <Cell>{room.name}</Cell>
          <Cell>{available.hour}</Cell>
          <button>Reservar</button>
        </RowDiv>)))}
    </React.Fragment>)
  }

  render () {
    return (
      <React.Fragment>
        {this.props.rooms.map((room, index) => (
          this.roomRow(room, index)
        ))}
      </React.Fragment>
    )
  }
}

Row.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default Row

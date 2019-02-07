import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Row extends Component {
  constructor (props) {
    super(props)
    this.roomRow = this.roomRow.bind(this)
  }

  roomRow (room) {
    console.log(room.availability)

    return (<React.Fragment>
      {room.availability.map((available, index) => (
        (<tr key={index}>
          <td>{this.props.scapeRoomName}</td>
          <td>{room.name}</td>
          <td>{available.hour}</td>
          <button>Reservar</button>
        </tr>)))}
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

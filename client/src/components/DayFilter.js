import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DayFilter extends Component {
  constructor (props) {
    super(props)
    this.state = { day: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ day: event.target.value })
  }

  render () {
    return (
      <div>
        <label>
          Día:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

DayFilter.propTypes = {}

export default DayFilter

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayFilter from './DayFilter'

class SearchBar extends Component {
  render () {
    return (
      <div>
        <DayFilter/>
      </div>
    )
  }
}

SearchBar.propTypes = {}

export default SearchBar

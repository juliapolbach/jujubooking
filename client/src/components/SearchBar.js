import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayFilter from './DayFilter'
import { SearchBarDiv } from '../styledComponents/main'


class SearchBar extends Component {
  render () {
    return (
      <SearchBarDiv>
        <DayFilter/>
      </SearchBarDiv>
    )
  }
}

SearchBar.propTypes = {}

export default SearchBar

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LeftDiv, RightDiv } from '../styledComponents/main'
import Table from '../components/Table'
import SearchBar from '../components/SearchBar'

class LeftContainer extends Component {
  render () {
    return (
      <LeftDiv>
        <SearchBar />
        <Table />
      </LeftDiv>
    )
  }
}

LeftContainer.propTypes = {}

export default LeftContainer

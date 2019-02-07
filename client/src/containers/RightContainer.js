import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LeftDiv, RightDiv } from '../styledComponents/main'
import Table from '../components/Table'

class RightContainer extends Component {
  render () {
    return (
      <RightDiv>
        <Table/>
      </RightDiv>
    )
  }
}

RightContainer.propTypes = {}

export default RightContainer

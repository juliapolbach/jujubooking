import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RightContainer from './RightContainer'
import LeftContainer from './LeftContainer'
import { MainDiv } from '../styledComponents/main'

class MainContainer extends Component {
  render () {
    return (
      <MainDiv>
        <LeftContainer />
        <RightContainer />
      </MainDiv>
    )
  }
}

MainContainer.propTypes = {}

export default MainContainer

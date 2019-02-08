import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RowDiv, Cell } from '../styledComponents/table'

class HeaderRow extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <RowDiv>
        {
        this.props.headers.map(header =>
          <Cell>{header}</Cell>)}
        </RowDiv>
      </React.Fragment>
        )
  }
}

HeaderRow.propTypes = {
  headers: PropTypes.array.isRequired
}

export default HeaderRow

import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'
import RightContainer from './containers/RightContainer'
import { darkTheme } from './styledComponents/theme'
import { Grid } from './styledComponents/main'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={() => darkTheme}>
        <Grid>
          <Header/>
          <MainContainer/>
        </Grid>
      </ThemeProvider>
    )
  }
}

export default App

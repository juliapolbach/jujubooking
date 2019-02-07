import styled from 'styled-components'

export const Grid = styled.div`
  background-color: ${props => props.theme.snow};
  width: 100vw;
  height: 100vh;
  font-family: Helvetica;
  color: ${props => props.theme.eerieBlack};
`
export const MainDiv = styled.div`
  display: flex;
  margin: 30px 60px 30px 60px;
  height: 100vh;
`
export const LeftDiv = styled.div`
  margin: 30px 15px 30px 30px;
  width: 70vw;
  height: 100vh;
  border: aquamarine 1px solid;
`
export const RightDiv = styled.div`
  margin: 30px 30px 30px 15px;
  width: 30vw;
  height: 100vh;
  border: aquamarine 1px solid;
`

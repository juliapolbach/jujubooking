import styled from 'styled-components'

export const Grid = styled.div`
  background-color: ${props => props.theme.snow};
  width: 100vw;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
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
`
export const RightDiv = styled.div`
  margin: 30px 30px 30px 15px;
  width: 30vw;
  height: 100vh;
  border: aquamarine 1px solid;
`
export const SearchBarDiv = styled.div`
  height: 10vh;
  background-color: white;
  border-radius: 5px;
  border: ${props => props.theme.snow} 1px solid;
  box-shadow: 1px 1px 10px ${props => props.theme.grey};
`
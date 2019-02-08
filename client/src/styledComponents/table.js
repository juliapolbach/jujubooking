import styled from 'styled-components'

export const RowDiv = styled.div`
       display: flex;
       justify-content: space-around;
       font-size: 1.2rem; 
       padding: 10px 3px 10px 3px;
       color: ${props => props.theme.letter};
       border-bottom: 1px solid ${props => props.theme.grey};
       &:hover {
       background: ${props => props.theme.trolleyGreyLight};
       color: ${props => props.theme.arsenic};
  }
`
export const Cell = styled.div`
       width: 150px;
       justify-content: flex-start;
       font-size: 0.8rem; 
       padding: 5px 3px 5px 3px;      
`
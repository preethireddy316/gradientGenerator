// Style your elements here
import {styled} from 'styled-components'

export const Button = styled.button`
  opacity: ${props => (props.opacity ? 1 : 0)};
`

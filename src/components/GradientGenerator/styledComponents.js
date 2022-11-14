// Style your elements here
import {styled} from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to ${props => props.val},
    ${props => props.color1},
    ${props => props.color2}
  );
`

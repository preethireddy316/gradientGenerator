// Write your code here
/* eslint-disable prettier/prettier */
import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeDirectionValue, onDirectionChange, details} = props
  const {displayText,value} = details

  const directionChange = () => {
    onDirectionChange(value)
  }
  const cls = activeDirectionValue === value
  return (
    <li>
      <Button type="button" opacity={cls} onClick={directionChange}>
        {displayText}
      </Button>
    </li>
  )
}
export default GradientDirectionItem

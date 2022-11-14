import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeDirectionId, onDirectionChange, details} = props
  const {directionId, displayText} = details
  const directionChange = () => {
    onDirectionChange(directionId)
  }
  const cls = activeDirectionId === directionId
  return (
    <li>
      <Button type="button" opacity={cls} onClick={directionChange}>
        {displayText}
      </Button>
    </li>
  )
}
export default GradientDirectionItem

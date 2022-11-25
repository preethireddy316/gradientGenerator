/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import {Component} from 'react'

import {Container} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    isClicked:false
  }

  onDirectionChange = id => {
    this.setState({activeDirectionId: id,isClicked:true})
  }

  getVal = () => {
    const {activeDirectionId} = this.state
    const activeObj = gradientDirectionsList.find(
      each => each.directionId === activeDirectionId,
    )
    return activeObj.value
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value,isClicked:false})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value,isClicked:false})
  }

  submitForm = event => {
    event.preventDefault()
    this.setState({isClicked:true})
  }

  render() {
    const {color1, color2, activeDirectionId} = this.state
    const prop = {val:this.getVal(),
        color1:color1,
        color2:color2,}
    return (
      <Container
        {isClicked && {...prop}}
        testid="gradientGenerator"
      >
        <form onSubmit={this.submitForm}>
          <h1>generate</h1>
          <p>choose</p>
          <ul>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                details={each}
                onDirectionChange={this.onDirectionChange}
                activeDirectionId={activeDirectionId}
              />
            ))}
          </ul>
          <p>pick</p>
          <input type="color" onChange={this.changeColor1} />
          <input type="color" onChange={this.changeColor2} />
          <button type="submit">Generate</button>
        </form>
      </Container>
    )
  }
}

export default GradientGenerator

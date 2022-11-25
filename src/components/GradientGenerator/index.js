/* eslint-disable prettier/prettier */
// Write your code here
import {Component} from 'react'

import {Container} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionValue: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientvalue:`to ${gradientDirectionsList[0].value},#8ae323,#014f7b`
   
  }

  onDirectionChange = value => {
    this.setState({activeDirectionValue: value,})
  }


  changeColor1 = event => {
    this.setState({color1: event.target.value, })
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value, })
  }

  clickGenerate=()=> {
    const {color1, color2, activeDirectionValue} = this.state
    this.setState({gradientvalue:`to ${activeDirectionValue},${color1},${color2}`})
  }

  render() {
    const {gradientvalue,color1,color2,activeDirectionValue}=this.state
    return (
      <Container
        value={gradientvalue}
        data-testid="gradientGenerator"
      >
          <h1>Generate a CSS Color Gradient</h1>
          <p>Choose Direction</p>
          <ul>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                details={each}
                onDirectionChange={this.onDirectionChange}
                activeDirectionValue={activeDirectionValue}
              />
            ))}
          </ul>
          <p>Pick the Colors</p>
          <input type="color" value ={color1} onChange={this.changeColor1} />
          <p>{color1}</p>
          <input type="color" value = {color2} onChange={this.changeColor2} />
          <p>{color2}</p>
          <button type="button" onClick={this.clickGenerate}>Generate</button>
      </Container>
    )
  }
}

export default GradientGenerator

import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreHeader from '../ScoreHeader'
import ResultsPage from '../ResultsPage'

import {
  MainContainer,
  RulesButton,
  RulesPage,
  PopupContainer,
  CloseButton,
  RulesImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Gamepage extends Component {
  state = {
    score: 0,
    gameStatus: true,
    result: 'YOU WON',
    items: [choicesList[0], choicesList[1]],
  }

  computeResults = (user, opponent) => {
    if (user.id === 'ROCK') {
      switch (opponent.id) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (user.id === 'SCISSORS') {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  showResult = id => {
    const {score} = this.state

    const filteredItem = choicesList.filter(each => each.id === id)
    const user = filteredItem[0]
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]

    console.log('user', user, opponent)
    const output = this.computeResults(user, opponent)

    let updatedScore = score
    if (output === 'YOU WON') {
      updatedScore = score + 1
    } else if (output === 'YOU LOSE') {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }
    this.setState({
      gameStatus: false,
      score: updatedScore,
      result: output,
      items: [user, opponent],
    })
  }

  restartGame = () => {
    this.setState({gameStatus: true})
    console.log('abe true hoja')
  }

  render() {
    const {score, gameStatus, result, items} = this.state

    return (
      <MainContainer>
        <ScoreHeader score={score} />
        <ResultsPage
          gameStatus={gameStatus}
          content={choicesList}
          items={items}
          resultText={result}
          checkResult={this.showResult}
          restart={this.restartGame}
        />
        <RulesPage>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <PopupContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            )}
          </Popup>
        </RulesPage>
      </MainContainer>
    )
  }
}

export default Gamepage

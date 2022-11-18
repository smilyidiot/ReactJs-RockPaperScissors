// import {Component} from 'react'

import {
  GameContainer,
  GameButton,
  GameImage,
  ResultContainer,
  ResultName,
  Results,
  ResetButton,
  ResultsView,
} from './styledComponents'

const ResultsPage = props => {
  const {gameStatus, content, items, resultText, checkResult, restart} = props

  return (
    <>
      {gameStatus ? (
        <GameContainer>
          <GameButton
            type="button"
            onClick={() => checkResult(content[0].id)}
            data-testid="rockButton"
          >
            <GameImage
              src={content[0].imageUrl}
              key={content[0].id}
              alt={content[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            onClick={() => checkResult(content[1].id)}
            data-testid="scissorsButton"
          >
            <GameImage
              src={content[1].imageUrl}
              key={content[1].id}
              alt={content[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            onClick={() => checkResult(content[2].id)}
            data-testid="paperButton"
          >
            <GameImage
              src={content[2].imageUrl}
              key={content[2].id}
              alt={content[2].id}
            />
          </GameButton>
        </GameContainer>
      ) : (
        <>
          <ResultsView>
            <ResultContainer>
              <ResultName>You</ResultName>
              <GameImage src={items[0].imageUrl} alt="your choice" />
            </ResultContainer>
            <ResultContainer>
              <ResultName>Opponent</ResultName>
              <GameImage src={items[1].imageUrl} alt="opponent choice" />
            </ResultContainer>
          </ResultsView>
          <ResultContainer>
            <Results>{resultText}</Results>
            <ResetButton type="button" onClick={restart}>
              Play Again
            </ResetButton>
          </ResultContainer>
        </>
      )}
    </>
  )
}

export default ResultsPage

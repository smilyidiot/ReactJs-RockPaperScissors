// import {Component} from 'react'
import {
  ScoreHeaderContainer,
  Heading,
  ScoreBoard,
  ScoreHeading,
  Score,
} from './styledComponents'

const ScoreHeader = props => {
  const {score} = props
  return (
    <ScoreHeaderContainer>
      <Heading>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </Heading>
      <ScoreBoard>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreBoard>
    </ScoreHeaderContainer>
  )
}

export default ScoreHeader

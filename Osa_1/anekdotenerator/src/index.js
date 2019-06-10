import React, { useState } from 'react'
import ReactDOM from 'react-dom'


let length = 6
//Didn't figure out how to use anectodotes.length here
let points = new Array(length + 1).join('0').split('').map(parseFloat)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
const Header = () => {
  return(
    <h2>Anecdote of the day</h2>
  )
}

const MostVoted = ({anecs, votes}) => {
  const indexOfMaxValue = votes.indexOf(Math.max(...votes))
  let mVoted = anecdotes[indexOfMaxValue]
  return(
    <div>
    <h2>Most voted anectodote</h2>
    <p> {mVoted} </p>
    </div>
  )}
const App = (props) => {
  const [selected, setSelected] = useState(0)

  const ChangeSelected = () => {
    let random = Math.floor(Math.random() * 6)
    while(random === selected){
        random = Math.floor(Math.random() * 6)
    }
    setSelected(random)
  }
  const SaveVote = () => {
    const copy = [...points]
    copy[selected] += 1
    points = copy
  }
  return (
    <div>
        <Header/>
        <p>{props.anecdotes[selected]}</p>
        <Button text="vote" handleClick = {SaveVote}/>
        <Button text="next anecdote" handleClick = {ChangeSelected}/>
        <MostVoted anectods = {anecdotes} votes = {points} />
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

//const AnecLenth = () => anecdotes.length


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
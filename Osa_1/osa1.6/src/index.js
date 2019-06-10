import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
    <>
        <h1>{props.name}</h1>
    </>
    )
}
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    const neutNum = 0
    const badNum = bad * -1
    if(total === 0){
        return(
            <div>Ei yhtään palautetta annettu</div>
        )
    }
    return(
        <div>
        <Statistic text="hyvä" value ={good} />
        <Statistic text="neutraali" value ={neutral} />
        <Statistic text="huono" value ={bad} />
        <Statistic text="yhteensä" value = {total} />
        <Statistic text="keskiarvo" value = {(good + neutNum + badNum) / total} />
        </div>
    )
}

const Statistic = (props) => {
    return(
        <div>
            <p> {props.text} {props.value}</p>
        </div>
    )
}
const Median = ({good, neutral, bad, total}) => {
    neutral = 0
    bad = bad * -1
    return(
        <p>keskiarvo {(good + neutral + bad) / total}</p>
    )

    }
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header = "anna palautetta"


  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header name = {header}/>
      <Button handleClick = {handleGoodClick} text = "hyvä" />
      <Button handleClick = {handleNeutralClick} text = "neutraali" />
      <Button handleClick = {handleBadClick} text = "huono" />
      <Header name = "statistiikka"/>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


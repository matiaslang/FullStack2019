import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

    return(
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
  return (
      <>
      <Part assignment = {props.first} number = {props.firstExe}/>
      <Part assignment = {props.second} number = {props.secondExe}/>
      <Part assignment = {props.third} number = {props.thirdExe}/>
      </>
  )
}
const Part = (props) => {
    return(
    <div>
        <p>
            {props.assignment} {props.number}
        </p>
    </div>
    )
}
const Total = (props) => {
    
    return(
    <div>
        <p>
            yhteensä {props.number} tehtävää
        </p>
    </div>
        
    )
}


const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content first = {part1} firstExe = {exercises1} second={part2} secondExe = {exercises2} third={part3} thirdExe={exercises3} />
      <Total number = {exercises1 + exercises2 + exercises3} />
    </div>
    /*
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>yhteensä {exercises1 + exercises2 + exercises3} tehtävää</p>
    </div>
    */
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
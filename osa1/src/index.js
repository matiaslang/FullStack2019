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
        <Part name = {props.name} exercises = {props.exercises}/>
      </>
  )
}
const Part = (props) => {
    return(
    <div>
        <p>
          {props.name} {props.exercises}
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
  const part1 = {
    name: 'Reactin perusteet',
    exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content name = {part1.name} exercises = {part1.exercises}/>
      <Content name = {part2.name} exercises = {part2.exercises}/>
      <Content name = {part3.name} exercises = {part3.exercises}/>
      <Total number = {part1.exercises + part2.exercises + part3.exercises} />
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
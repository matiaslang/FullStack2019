import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

    return(
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
const [first, second, last] = props.parts
  return (
    <>
      <Part name = {first.name} exercises = {first.exercises}/>
      <Part name = {second.name} exercises = {second.exercises}/>
      <Part name = {last.name} exercises = {last.exercises}/>  
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
  const [first, second, last] = props.parts
  const total = first.exercises + second.exercises + last.exercises
    return(
    <div>
        <p>
            yhteensä {total} tehtävää
        </p>
    </div>
        
    )
}


const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
    
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'

const Note = ({note, key, exercises }) => {
  return (
    <p>{note}   {exercises}</p>
  )
}
const Total = ({total}) => (
  <h4>Total of {total} exercises</h4>
)

const AllCourses = (props) => {

  const courses = () => props.course.map(parts => 
    <Course course = {parts.parts} name = {parts.name}/>)
  
  
  return(
    <div>{courses()}</div>
  )
}

const Course = (props) => {
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const rows = () => props.course.map(parts => 
    <Note 
      key={parts.id}
      note={parts.name}
      exercises={parts.exercises}
    />
  )
  console.log("OSAT OVAT" , props.course.name)
  var total = props.course.map(parts => parts.exercises)
  total = total.reduce(reducer)
  return(
  <div>
    <h1>{props.name}</h1>
    {rows()}
    <Total total={total}/>
  </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <AllCourses course={courses} />
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
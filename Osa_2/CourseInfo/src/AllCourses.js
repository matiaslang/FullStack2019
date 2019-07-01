import React from 'react'


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

export default AllCourses
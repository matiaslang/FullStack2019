const phoneBookRouter = require('express').Router()
const Person = require('../models/person')

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
]



phoneBookRouter.get('/', async (request, response) => {
  Person
    .find({})
    .then(persons => {
      response.json(persons.map(person => person.toJSON()))
    })
})


phoneBookRouter.get('/info', (req,res) => {
  let num = persons.length
  let date = new Date()
  res.send(`<p>Phonebook has info for ${num} people</p>
    <p>${date}</p>`)
})


phoneBookRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person){
        response.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})




const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

phoneBookRouter.post('/', (request, response, next) => {
  const body = request.body
  const name = persons.find(person => person.name === body.name)
  console.log(body)
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  if(name){
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  const person = new Person ({
    name: body.name,
    number: body.number
  })

  person
    .save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
})



phoneBookRouter.put('/:id', (request, response, next) => {
  const body = request.body
  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new :true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

phoneBookRouter.delete('/:id', (request, response, next) => {
  console.log(request.params.id)
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = phoneBookRouter

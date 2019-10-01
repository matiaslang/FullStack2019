require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
morgan.token('body', function (req, res) {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body '))




let persons = [{
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


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person
    .find({})
    .then(persons => {
      response.json(persons.map(person => person.toJSON()))
    })
})



app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (note) {
        response.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})



app.get('/info', (req, res) => {
  let num = persons.length
  let date = new Date()
  res.send(`<p>Phonebook has info for ${num} people</p>
    <p>${date}</p>`)
})

const generateId = () => {
  const maxId = persons.length > 0 ?
    Math.max(...persons.map(n => n.id)) :
    0
  return maxId + 1
}

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  const name = persons.find(person => person.name === body.name)

  console.log(body)
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  if (name) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  const person = new Person({
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



app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, {
    new: true
  })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  console.log(request.params.id)
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({
      error: 'malformatted id'
    })
  } else if (error.namer === 'ValidationError') {
    return response.status(400).json({
      error: error.message
    })
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
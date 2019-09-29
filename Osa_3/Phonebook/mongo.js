const mongoose = require('mongoose')


if ( process.argv.length<3 ) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]


const url = 
    `mongodb+srv://fullstack:${password}@cluster0-ke4su.mongodb.net/Phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personName = process.argv[3]
const personNumber = process.argv[4]

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })

const Person = mongoose.model('Person', personSchema)

if(!process.argv[3] && !process.argv[4]){
    Person
        .find({})
        .then(persons => {
            console.log("phonebook: ")
            let person = persons.map((name, id) =>
            console.log(`${name.name} ${name.number}`)) 
            mongoose.connection.close()
        })
}


else{
const person = new Person({
name: personName,
number: personNumber,
})

person.save().then(response => {
    console.log(`added ${personName} number ${personNumber} to phonebook`);
    mongoose.connection.close();
})
}
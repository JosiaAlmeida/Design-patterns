
const personPrototype = {
    firstName: "Josia",
    lastName: "Almeida",
    age: 19,

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype = Object.create(personPrototype)


const person1 = new Person("Josias", "Almeida", 20)

console.log(person1)
console.log(person1.fullName())
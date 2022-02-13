export interface Prototype {
    clone(): Prototype
}

export class Person implements Prototype {
    constructor(public name: string, public age: number) { }
    clone(): this {
        const newObjet = Object.create(this)
        return newObjet
    }

}

const person1 = new Person("Josia", 19)

const person2 = person1.clone()

console.log(person2)
console.log(person2.name)
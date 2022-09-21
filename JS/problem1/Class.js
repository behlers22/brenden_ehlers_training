// Using ES6 class structure
class Animal {
    constructor(name="Hank", feet=4) {
        this.name = name
        this.feet = feet
    }

    speak() {
        console.log(`Hello, my name is ${this.name} and I have ${this.feet} ${this.feet === 1 ? 'foot' : 'feet'}`)
    }

    getFeet() {
        return this.feet
    }

    getName() {
        return this.name
    }
}

class Dog extends Animal {
    speak() {
        console.log(`Hello, I am a dog and my name is ${this.name}`)
    }

    howl() {
        console.log('owooooo')
    }
}

class Snake extends Animal {
    constructor(name) {
        super(name, 0)
    }

    speak() {
        console.log(`Hello, I am a ssssnake and my name isssss ${this.name}`)
    }

    slither() {
        console.log('I am sssslithering...')
    }
}

const animal = new Animal()
const dog = new Dog('Fido', 4)
const snake = new Snake('Frank')

console.log(animal)
console.log(dog)
console.log(snake)

// animal.speak()
// dog.speak()
// dog.howl()
// console.log(dog.getFeet())
// snake.speak()
// snake.slither()
// console.log(snake.getFeet())
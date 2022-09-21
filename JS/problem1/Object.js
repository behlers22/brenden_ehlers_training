// Using objects and prototypes
const Animal = {
    name: 'Hank',
    feet: 4,
    speak() {
        console.log(`Hello, my name is ${this.name} and I have ${this.feet} ${this.feet === 1 ? 'foot' : 'feet'}`)
    },
    getFeet() {return this.feet},
    getName() {return this.name},
}

const Dog = {
    __proto__: Animal,
    speak() {
        console.log(`Hello, I am a dog and my name is ${this.name}`)
    },
    howl() {
        console.log('owooooo')
    }
}

const Snake = {
    __proto__: Animal,
    feet: 0,
    speak() {
        console.log(`Hello, I am a ssssnake and my name isssss ${this.name}`)
    },
    slither() {
        console.log('I am sssslithering...')
    }
}

// monkey patching and polyfill

const animal = Animal
const dog = Dog
dog.name = 'Fido'
const snake = Snake
snake.name = 'Frank'

animal.speak()
dog.speak()
dog.howl()
console.log(dog.getFeet())
snake.speak()
snake.slither()
console.log(snake.getFeet())

// Using functions 
function Animal(name='Hank', feet=4) {
    const _name = name
    const _feet = feet

    function speak() {
        console.log(`Hello, my name is ${_name} and I have ${_feet} ${_feet === 1 ? 'foot' : 'feet'}`)
    }

    function getFeet() {
        return _feet
    }

    function getName() {
        return _name
    }

    return {
        __proto__: Object(),
        speak,
        getFeet,
        getName,
    }
}

function Dog(name, feet) {
    const _name = name
    const _feet = feet

    function speak() {
        console.log(`Hello, I am a dog and my name is ${_name}`)
    }

    function howl() {
        console.log('owooooo')
    }

    return {
        __proto__: new Animal(_name, _feet),
        speak,
        howl,
    }
}

function Snake(name) {
    const _name = name
    const _feet = 0

    function speak() {
        console.log(`Hello, I am a ssssnake and my name isssss ${_name}`)
    }

    function slither() {
        console.log('I am sssslithering...')
    }

    return {
        __proto__: new Animal(_name, _feet),
        speak,
        slither,
    }
}

const animal = new Animal()
const dog = new Dog('Fido')
const snake = new Snake('Frank')

animal.speak()
dog.speak()
dog.howl()
console.log(dog.getFeet())
snake.speak()
snake.slither()
console.log(snake.getFeet())
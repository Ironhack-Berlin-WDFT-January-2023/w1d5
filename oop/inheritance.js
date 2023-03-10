// Inheritance means, we can extend one class with another class and use the properties and methods from the other class

class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    makeSound() {
        console.log(this.sound)
    }
}

// We now can extend that Animal class
class Cat extends Animal {
    constructor(name, sound, numberOfLifes) {
        // "super" refers to the parent class "Animal"
        // We need to pass name and sound as arguments
        super(name, sound)
        this.numberOfLifes = numberOfLifes
    }

    // We can override methods from the parent class
    makeSound() {
        console.log("This cat makes a special sound")
    }
}

// Now we can create objects (instances) with our new classes
let cat = new Cat("rudolf", "miaouh", 1)
console.log(cat)

// Another class extends the Animal class
class Bird extends Animal {
    constructor(name, sound) {
        super(name, sound)
    }

    // We can also add new methods to the class
    fly() {
        console.log("I am flying")
    }
}

// Now we can create objects with our classes
const cat2 = new Cat("Kitty", "Meow", 9)
console.log(cat2)
cat2.makeSound()

const bird = new Bird("Birdy", "Peep")
console.log(bird)
bird.fly()
bird.makeSound()

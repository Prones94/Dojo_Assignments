class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }
    drinkSake() {
        console.log('Adding health!');
        this.health += 10
    }
}

const ninja1 = new Ninja("Hayabusa", 100)
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()
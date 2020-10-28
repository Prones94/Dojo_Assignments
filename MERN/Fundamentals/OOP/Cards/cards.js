class Card {
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
    
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power
        this.res = res
    }
    errors = () => {throw Error("Target must be a unit!")}
    attack(target){
        target instanceof Unit ? target.res -= this.power : errors()
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    errors = () => {throw Error("Target must be a unit!")}
    play(target){
        target instanceof Unit ?
             target.stat == "res" ? target.res += this.magnitude 
                : target.power += this.magnitude 
            : errors()
    }   
}

// Summon Ninjas
const redNinja = new Unit("Red Belt Ninja",3, 3, 4)
const blackNinja = new Unit("Black Belt Ninja", 4,5,4)

// Create Effects
const hard_effect = new Effect("Hard Algorithm", 2, "Increaase target's resilience by 3", "res", 3)
const unhandled = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "res", -2)
const pair = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2)

// Action!
console.log(hard_effect.play(redNinja))
console.log(unhandled.play(redNinja))
console.log(pair.play(redNinja))
console.log(redNinja.attack(blackNinja))

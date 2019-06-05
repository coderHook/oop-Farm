class Animal {
    constructor(age){
        this.age = age;
    }

    getValueInEuros(){
        return this.getWeightInKg() * this.price;
    }

};

class Pig extends Animal {
    constructor(age){
        super(age);
        this.price = 4;
        this.maxWeight = 700;
    }
    getWeightInKg(){
        return Math.min(this.age * 2.3, this.maxWeight);
    }
}

class Cow extends Animal {
    constructor(age){
        super(age);
        this.price = 5;
        this.maxWeight = 1200;

    }
    getWeightInKg(){
        return Math.min(this.age * 1.5, this.maxWeight);
    }
}

class Horse extends Animal {
    constructor(age){
        super(age);
        this.price = 10;
        this.maxWeight = 1000;

    }
    getWeightInKg(){
        console.log('Horse age:', this.age)
        return Math.min(this.age * 1.7, this.maxWeight);
    }
}

module.exports = { Pig, Cow, Horse}
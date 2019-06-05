class Farm {
    constructor(name) {
        this.name = name;
        this.crops = [];
        this.animals = [];
    }

    addCrop(crop){
        this.crops.push(crop);
    }

    incomeAnimals(){
        return this.animals
                        .map(animal => animal.getValueInEuros())
                        .reduce((a, b) => a+b, 0)
    }

    incomeCrops(){
        return this.crops
                        .map(crop => crop.getYieldInEuros())
                        .reduce((a, b) => a + b, 0);
    }

    calculateIncome() {

        let incCrops = this.crops
                            .map(crop => crop.getYieldInEuros())
                            .reduce((a, b) => a + b, 0);

        console.log("getYieldInEuros:", incCrops)


        let incAnimals = this.animals
                            .map(animal => animal.getValueInEuros())
                            .reduce((a, b) => a + b, 0);  

        console.log("getValueInEuros:", incAnimals)

        let totalInc = incCrops + incAnimals;

        console.log("Total Income:", totalInc)

        console.log('--------------------------------------')
        console.log('-Farm:', this.name);
        console.log('-No. of crops:', this.crops.length);
        console.log('-No. of animals:', this.animals.length);
        console.log('-Total income:', totalInc);        
        console.log('---------------------------------------')

        return incCrops + incAnimals;
    }

    addAnimal(animal){
        return this.animals.push(animal);
    }
}



module.exports.Farm = Farm



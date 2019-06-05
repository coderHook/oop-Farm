class Farm {
    constructor(name) {
        this.name = name;
        this.crops = [];
        this.animals = [];
    }

    addCrop(crop){
        this.crops.push(crop);
    }

    addAnimal(animal){
        return this.animals.push(animal);
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

        let incCrops = this.incomeCrops();
        let incAnimals = this.incomeAnimals();  

        let totalInc = incCrops + incAnimals;

        //Reports
        console.log('--------- R E P O R T -----')
        console.log('-Farm:', this.name);
        console.log('-No. of crops:', this.crops.length);
        console.log('-No. of animals:', this.animals.length);
        console.log('-Total income:', totalInc);        
        console.log('----------------------------')

        return incCrops + incAnimals;
    }

    getCropsInfo() {
        return this.crops.map(crop => console.log(crop));
    }

    getAnimalsInfo() {
        return this.animals.map(animal => console.log(animal));
    }

    isVegan() {
        return (this.crops.length > 0 && this.animals.length === 0)? true : false;
    }

    cropMostIncome(){
        return Math.max(this.crops(crops => crop.getYieldInEuros()));
    }
 
}



module.exports.Farm = Farm



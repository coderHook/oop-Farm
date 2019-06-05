// crops.spec.js
const { Wheat, Sugarcane } = require('./crops')
const { Farm } = require('./index.js')
const { Cow, Pig, Horse } = require('./animals.js')


test('The Wheat class can calculate a yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeDefined()
})

test('The Wheat class calculates the proper yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
})

// Test for addCrops()

test('We can add a crop to our farm', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
});

// test for caculateIncome()

// add to index.spec.js

test('The income of an empty farm is 0', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.calculateIncome()).toBe(0)
  })

//Test for the calculations are correct if we add more crops

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100));
    farm.addCrop(new Sugarcane(100));
    expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1);
})

// Tests for adding animals

test('Animals can be added to the farm', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
})

test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
  expect(farm.calculateIncome()).not.toBe(0)
})

test('Animals can be added to the farm', () => {
  const farm = new Farm()
  farm.addAnimal(new Pig(100))
})

test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm()
  farm.addAnimal(new Pig(100))
  expect(farm.calculateIncome()).not.toBe(0)
})

test('Animals can be added to the farm', () => {
  const farm = new Farm()
  farm.addAnimal(new Horse(100))
})

test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm()
  farm.addAnimal(new Horse(100))
  expect(farm.calculateIncome()).not.toBe(0)
})

test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm('Pedro')
  farm.addCrop(new Wheat(100))
  farm.addAnimal(new Horse(100))
  expect(farm.calculateIncome()).not.toBe(0)
})

//Test for incomeAnimals
test('Income just from animals,', () => {
  const farm = new Farm('TEST_Aniamls_Income');
  farm.addAnimal(new Horse(100))
  expect(farm.incomeAnimals()).not.toBe(0);
})

// Test for income from crops
test('Income just from Crops', () => {
  const farm = new Farm('Test_crop_income');
  farm.addCrop(new Wheat(100));
  farm.addAnimal(new Pig(60));
  expect(farm.incomeCrops()).not.toBe(0);
  expect(farm.incomeAnimals()).not.toBe(0);
})

//Show Crops
test('Showing every Crop INFO that is in the farm', () => {
  const farm = new Farm('TEST_CROPS_INFO');
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(80));
  expect(farm.getCropsInfo()).not.toBe('');
})

//Show Animals
test('Showing every Animal INFO that is in the farm', () => {
  const farm = new Farm('TEST_Animals_INFO');
  farm.addAnimal(new Pig(100));
  farm.addAnimal(new Cow(80));
  farm.addAnimal(new Horse(120));
  expect(farm.getAnimalsInfo()).not.toBe('');
})

//Is this farm Vegan?
test('Is this farm Vegan:', () => {
  const farm = new Farm('Test_VEGAN_FARM');
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(80));
  expect(farm.isVegan()).toBe(true);
})

test('Is this farm Vegan:', () => {
  const farm = new Farm('Test_VEGAN_FARM');
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(80));
  farm.addAnimal(new Pig(100));
  farm.addAnimal(new Cow(80));
  farm.addAnimal(new Horse(120));
  expect(farm.isVegan()).toBe(false);
})

//Crop with most Income
test('Crop with most income:', () => {
  const farm = new Farm('Test_Most_INC_Crop_FARM');
  farm.addCrop(new Wheat(100));
  const sugarcane = new Sugarcane(180);
  farm.addCrop(sugarcane);
  farm.addAnimal(new Pig(100));
  farm.addAnimal(new Cow(80));
  farm.addAnimal(new Horse(120));
  expect(farm.cropMostIncome()).toBe(sugarcane);
})
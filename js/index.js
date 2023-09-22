const firstAnimal = {
  name: "Pepi",
  age: 557,
  weight: 169,
  spieces: "mammut",
};

const secondAnimal = {
  name: "Arcoiris",
  age: 2300,
  weight: 200,
  spieces: "Unicornio",
  extintionYear: 1995,
};

const getAnimalSpieces = (animal) => {
  return animal.spieces;
};

const getIsAnimalExtinted = (animal) => {
  if (animal.extintionYear) {
    return true;
  } else {
    return false;
  }
};

console.log(getIsAnimalExtinted(secondAnimal));

const printAnimalSentence = (animal) => {
  return `El animal ${animal.name} es un ${animal.spieces} de ${animal.age} años y pesa ${animal.weight}`;
};

console.log(printAnimalSentence(secondAnimal));

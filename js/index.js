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

const getAnimalSpieces = (animal) => animal.spieces;

const getIsAnimalExtinted = (animal) => {
  if (animal.extintionYear) {
    return true;
  } else {
    return false;
  }
};

const printAnimalSentence = (animal) =>
  `El animal ${animal.name} es un ${animal.spieces} de ${animal.age} años y pesa ${animal.weight}`;

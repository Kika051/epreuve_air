const leftRotation = (array) => {
  if (!Array.isArray(array)) {
    console.error("Erreur : L'argument n'est pas un tableau.");
    process.exit(1);
  }
  if (array.length < 2) {
    console.error(
      "Erreur : Le tableau doit avoir au moins deux éléments pour être rotatif."
    );
    process.exit(1);
  }

  const firstElement = array.shift();
  array.push(firstElement);

  return array;
};

const inputArray = process.argv.slice(2);
const rotatedArray = leftRotation(inputArray);
console.log(rotatedArray.join(", "));

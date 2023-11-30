const myQuickSort = (array) => {
  if (!Array.isArray(array)) {
    console.error("erreur, l'argument n'est pas un tableau");
    process.exit(1);
  }
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];

  const petits = array.filter((element) => element < pivot);
  const grands = array.filter((element) => element > pivot);

  const triPetits = myQuickSort(petits);
  const triGrands = myQuickSort(grands);

  return triPetits.concat(pivot, triGrands);
};

if (process.argv.length < 3) {
  console.error("erreur, fournir au moins un nombre");
  process.exit(1);
}

const nombres = process.argv.slice(2).map(Number);

const nombresTries = myQuickSort(nombres);

console.log(nombresTries.join(" "));

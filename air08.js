const sortedFusion = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    console.error("Erreur : Les deux tableaux doivent être fournis.");
    process.exit(1);
  }

  const fusionIndex = array1.indexOf("fusion");
  if (fusionIndex === -1 || fusionIndex !== array1.length - 1) {
    console.error(
      "Erreur : Le mot 'fusion' doit être présent et séparer les deux tableaux."
    );
    process.exit(1);
  }

  const firstPart = array1.slice(0, fusionIndex);
  const secondPart = array2.slice(0);

  const mergedArray = mergeSortedArrays(firstPart, secondPart);

  return mergedArray;
};

const mergeSortedArrays = (array1, array2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  result = result.concat(array1.slice(i), array2.slice(j));

  return result;
};

const array1 = [10, 20, 30, "fusion"];
const array2 = [15, 25, 35];

const mergedArray = sortedFusion(array1, array2);
console.log(mergedArray.join(" "));

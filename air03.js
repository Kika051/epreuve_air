const findValueWithoutPair = (list) => {
  if (!Array.isArray(list) || list.length % 2 === 0) {
    console.error("erreur");
    process.exit(1);
  }

  for (const element of list) {
    const occurrences = list.filter((e) => e === element).length;
    if (occurrences === 1) {
      return element;
    }
  }

  console.error("erreur");
  process.exit(1);
};

const args = process.argv.slice(2);

if (args.length === 0 || args.length % 2 === 0) {
  console.error("Erreur");
  process.exit(1);
}

const result = findValueWithoutPair(args);

console.log(result);

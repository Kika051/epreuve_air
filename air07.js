const sortedIsnsert = (array, newElement) => {
  if (!Array.isArray(array) || typeof newElement !== "number") {
    console.error("erreur");
    process.exit(1);
  }

  const newArray = [...array, newElement].sort((a, b) => a - b);
  console.log(newArray.join(" "));
};

const args = process.argv.slice(2).map(Number);

sortedIsnsert(args.slice(0, -1), args[args.length - 1]);

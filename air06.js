const filterStrings = (arrayOfStrings, searchString) => {
  if (!Array.isArray(arrayOfStrings) || typeof searchString !== "string") {
    console.error("Erreur : Les arguments ne sont pas valides.");
    process.exit(1);
  }

  const filteredArray = arrayOfStrings.filter((str) =>
    str.includes(searchString)
  );

  console.log(filteredArray.join(", "));
};

const args = process.argv.slice(2);

filterStrings(args.slice(0, -1), args[args.length - 1]);

const ma_function = (stringcut, stringseparator) => {
  if (typeof stringcut !== "string" || typeof stringseparator !== "string") {
    console.error(
      "Erreur : Les arguments doivent être des chaînes de caractères."
    );
    process.exit(1);
  }

  const array = stringcut.split(stringseparator);

  array.forEach((element) => {
    console.log(element);
  });
};

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error(
    "Erreur : Veuillez fournir exactement une chaîne à découper et un séparateur."
  );
  process.exit(1);
}

ma_function(args[0], args[1]);

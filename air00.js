function ma_fonction(stringcut) {
  if (args.length !== 1) {
    console.error("Error: Veuillez fournir exactement une chaîne à découper.");
    process.exit(1);
  }

  if (typeof stringcut !== "string") {
    console.error("Error: L'argument doit être une chaîne de caractères.");
    return;
  }

  const tableau = stringcut.split(" ");

  tableau.forEach((element) => {
    console.log(element);
  });
}

const args = process.argv.slice(2);

ma_fonction(args[0]);

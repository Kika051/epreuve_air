const ma_function = (stringArray, stringSeparator) => {
  if (!Array.isArray(stringArray) || typeof stringSeparator !== "string") {
    console.error(
      "Erreur : Les arguments doivent être un tableau de chaînes de caractères et un séparateur."
    );
    process.exit(1);
  }

  const result = stringArray.join(stringSeparator);
  return result;
};

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(
    "Erreur : Veuillez fournir au moins un tableau de chaînes de caractères et un séparateur."
  );
  process.exit(1);
}

// Supprimer les guillemets doubles autour de chaque argument avec espace
const cleanedArgs = args.map((arg) => arg.replace(/^"(.*)"$/, "$1"));

const resultat = ma_function(
  cleanedArgs.slice(0, -1),
  cleanedArgs[cleanedArgs.length - 1]
);

console.log(resultat);

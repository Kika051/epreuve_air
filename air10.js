const fs = require("fs");

const displayFileContent = (nameFile) => {
  try {
    const contain = fs.readFileSync(nomFichier, "utf-8");

    console.log(contenu);
  } catch (erreur) {
    console.error("erreur, impossible de lire le fichier");
    process.exit(1);
  }
};

if (process.argv.length !== 3) {
  console.error(
    "Erreur, vous devez fournir le nom d'un fichier dans le terminal"
  );
  process.exit(1);
}

const nameFile = process.argv[2];

displayFileContent(nameFile);

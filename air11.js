const showStairs = (character, numberFloor) => {
  if (
    typeof character !== "string" ||
    character.length !== 1 ||
    typeof numberFloor !== "number" ||
    numberFloor < 1
  ) {
    console.error("Erreur, données non valide");
    process.exit(1);
  }

  for (let i = 1; i <= numberFloor; i++) {
    const espaces = " ".repeat(numberFloor - i);
    const escalier = character.repeat(2 * i - 1);
    console.log(espaces + escalier);
  }
};

if (process.argv.length !== 4) {
  console.error(
    "Erreur : Veuillez fournir un caractère et le nombre d'étages en argument."
  );
  process.exit(1);
}

const caractere = process.argv[2];
const nombreEtages = parseInt(process.argv[3]);

showStairs(caractere, nombreEtages);

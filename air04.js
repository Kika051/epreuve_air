if (process.argv.length !== 3) {
  console.error("erreur");
  process.exit(1);
}

const inputString = process.argv[2];

if (typeof inputString !== "string") {
  console.error("erreur");
  process.exit(1);
}

const result = inputString.replace(/(.)\1+/g, "$1");
console.log(result);

const performOperation = () => {
  if (process.argv.length < 5) {
    console.error("erreur");
    process.exit(1);
  }
  const integers = process.argv.slice(2, -1).map(Number);

  if (integers.some(isNaN)) {
    console.error("erreur");
    process.exit(1);
  }

  const operation = process.argv[process.argv.length - 1];

  if (!/^[+-]\d+$/.test(operation)) {
    console.error("Erreur");
    process.exit(1);
  }

  const operand = parseInt(operation);

  const result = integers.map((num) => num + operand);

  console.log(result.join(" "));
};
performOperation();

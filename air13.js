const fs = require("fs");
const { execSync } = require("child_process");

const exercices = [
  "air00",
  "air01",
  "air02",
  "air03",
  "air04",
  "air05",
  "air06",
  "air07",
  "air08",
  "air09",
  "air10",
  "air11",
  "air12",
];

const totalTests = exercices.reduce(
  (acc, exercice) => acc + fs.existsSync(`./${exercice}`),
  0
);
let successCount = 0;

exercices.forEach((exercice, index) => {
  try {
    console.log(`${exercice} (${index + 1}/${totalTests}) :`);

    execSync(`node ./${exercice}.js`, { stdio: "inherit" });

    console.log("\x1b[32m%s\x1b[0m", "success");
    successCount++;
  } catch (error) {
    console.log("\x1b[31m%s\x1b[0m", "failure");
  }

  console.log("---");
});

console.log(`Total success: (${successCount}/${totalTests})`);

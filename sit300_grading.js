const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gradeStudent(score) {
  if (score >= 80 && score <= 100) return "A";
  else if (score >= 70 && score <= 79) return "B";
  else if (score >= 60 && score <= 69) return "C";
  else if (score >= 50 && score <= 59) return "D";
  else if (score >= 40 && score <= 49) return "E";
  else if (score >= 0 && score < 40) return "Fail";
  else return "Invalid score";
}

rl.question("Enter student score for SIT 300: ", (input) => {
  const score = parseInt(input);

  const grade = gradeStudent(score);
  console.log(`Student Score: ${score} → Grade: ${grade}`);

  rl.close();
});
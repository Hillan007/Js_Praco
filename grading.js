function gradeStudent(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "D";
  } else if (score >= 40 && score <= 49) {
    return "E";
  } else if (score >= 0 && score < 40) {
    return "Fail";
  } else {
    return "Invalid score";
  }
}

// Example usage:
let scores = [95, 72, 67, 53, 45, 30, -5, 105];

scores.forEach((score, index) => {
  console.log(`Student ${index + 1}: Score = ${score}, Grade = ${gradeStudent(score)}`);
});

console.log("Script started");
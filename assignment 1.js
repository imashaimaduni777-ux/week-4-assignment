//assigns a letter grade based on a student's exam score
let myScore = Number(prompt("Enter your exam score:"));

if (myScore > 90) {
  console.log("A");
} else if (myScore >= 80 && myScore <= 90) {
  console.log("B");
} else {
  console.log("C");
}
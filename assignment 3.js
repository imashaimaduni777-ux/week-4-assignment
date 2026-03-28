let num1 = 0;
let num2 = 1;

for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    console.log(num1);
  } else if (i === 2) {
    console.log(num2);
  } else {
    let nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
  }
}
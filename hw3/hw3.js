var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');

//for factorial
var fac = 1;
for(i = 1; i <= fNum1; i++){fac *= i;}
console.log("Factorial of the 1st number is = ", fac);

//for sum
var sum = 0;
while(fNum2){
  sum+= fNum2 %10;
  fNum2 = Math.floor(fNum2/10);
}
console.log("The sum of all the digits of the second number is = ", sum);

//for reverse
//source credit: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php
fNum3 = fNum3 + "";
console.log("The Reverse of the 3rd number is = ", fNum3.split("").reverse().join(""));

//for palindrome
fNum4 = fNum4 + "";
var ans = (fNum4.split("").reverse().join("") == fNum4) ? "true" : "false";
console.log("Is the 4th Number a Palindrome(True/False)? ", ans);

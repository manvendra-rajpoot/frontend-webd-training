/* A simple calculator */
// var n1 = 123,
//   n2 = 12;

// var add = n1 + n2;
// var sub = n1 - n2;

// var quotient = n1 / n2;
// var reminder = n1 % n2;

// console.log("Two numbers n1: " + n1 + ", n2: " + n2);
// console.log("Sum is: ", n1 + n2);
// console.log("Diff is: ", n1 - n2);
// console.log("Product is: ", n1 * n2);
// console.log("Quotient when n1 divides n2 is: ", n1 / n2);
// console.log("Reminder when n1 divides n2 is:  ", n1 % n2);
/* --- */

/* Check Number is EVEN or ODD. */
// function checkNum(x) {
//   if (x == 0) {
//     console.log("Enter another number tha zero..");
//   } else if (x % 2 == 1) {
//     console.log("It is ODD!");
//   } else {
//     console.log("It is EVEN!");
//   }
// }
// // checkNum(10);

// var checkNum2 = function (x) {
//   if (x == 0) {
//     console.log("Enter another number tha zero..");
//   } else if (x % 2 == 1) {
//     console.log("It is ODD!");
//   } else {
//     console.log("It is EVEN!");
//   }
// };
// checkNum2(12);
/* */

var firstElement = document.getElementById("app");
var secondElement = document.getElementsByTagName("p");
var thirdElement = document.getElementsByClassName("para");
var fourthElement = document.querySelector(".para");
var fifthElement = document.querySelectorAll(".para");
var sixthElement = document.querySelector("#app");
var parentElement = document.getElementsByClassName("para");

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);
console.log(fifthElement);
console.log(sixthElement);
console.log(parentElement.parentElement);

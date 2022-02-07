let num = 4;
let str = "4";
console.log(str * num);

const student = {
  Name: "Ram",
  Age: 30,
  "father name": "Mohan Singh"
};

for (let key in student) {
  console.log(key); //all keys in value
  console.log(student[key]); //use bracket notation to avoid Error because key can have whitespaces too.
}

//rest parameter
function showRest(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
showRest("One", 765, 87, "$%^^", "jg");

//spread operator
let arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//Async JS
//setTimeOut()

function greet() {
  console.log("Hello IBM!");
}
function bye() {
  console.log("Bye lad!");
}
setTimeout(greet, 4000);
bye();

//Promises

let status = true;
let promiseExam = new Promise(function (resolve, reject) {
  if (status) {
    resolve("Promise is fullfilled!!!");
  } else {
    reject("Promise is not fullfilled!!!");
  }
});
console.log(promiseExam);

//using setTimeout()

let promiseExam2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (status) {
      resolve("YOUR Promise is fullfilled!!!");
    } else {
      reject("YOUR Promise is not fullfilled!!!");
    }
  }, 5000);
});
console.log(promiseExam2);

//chaining
let count = new Promise((resolve, reject) => {
  resolve("Resolved promise");
});
count.then((res) => {
  console.log(res + " + Well yes!");
});
console.log(count);

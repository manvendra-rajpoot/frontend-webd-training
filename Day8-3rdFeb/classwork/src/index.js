/*promise*/
let count = new Promise((resolve, reject) => {
  if (1 == "1") {
    resolve("Resolved!");
  } else {
    reject("Declined!");
  }
});
console.log(count);

/*chaining*/
let count2 = new Promise((resolve, reject) => {
  if (1 === "1") {
    resolve("Fullfilled..");
  } else {
    reject("Rejected..");
  }
});

count2
  .then(function promSuccess(result) {
    console.log(result);
  })
  .catch(function promError(result) {
    console.log(result);
  })
  .finally(() => {
    console.log("No Matter what...");
  });
console.log(count2);

/**async / await**/

/*async keyword usage*/
async function f1() {
  console.log("This is async func..");
  return Promise.resolve("Promise Resolved..");
}
f1().then((res) => {
  console.log(res);
});

/*await keyword usage*/
let newPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise is resolved!!!!!!!");
  }, 3000);
});

async function asyncFunc() {
  let ans = await newPromise;
  console.log(ans);
  console.log("HI, How u doin'?");
}
asyncFunc();

/*exceptional handling - try_catch*/

let newPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Promise is NOT resolved...");
  }, 4000);
});

async function asyncFunc2() {
  try {
    let ans = await newPromise2;
    console.log(ans);
  } catch (err) {
    console.log(err);
  }
}
asyncFunc2();

/**fetch API**/
let info = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => console.log(users));

console.log("Users", info);

/** async/await**/

let num = Math.floor(10 * Math.random());
let even = num * 2;
let newProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (even > 15) {
      resolve("The transaction is: Success !");
    } else {
      reject("The transaction is: Failure !");
    }
  }, 3000);
});

async function f1() {
  try {
    let even1 = await newProm;
    console.log(even1);
  } catch (err) {
    console.log(err);
  }
}
console.log("The random even is:", even);
f1();

/** fetch API* */

let info = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    let userNames = users.map((user) => {
      return user["username"];
    });
    return userNames;
  });

async function fetchUsers() {
  try {
    let users = await info;
    console.log("Users: ", users);
  } catch (err) {
    console.log(err);
  }
}

fetchUsers();

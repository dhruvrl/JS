// Write a JavaScript program to list the properties of a JavaScript object.

const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  let txt = "";
  for (let x in person) {
    txt += person[x];
  }
console.log(txt)

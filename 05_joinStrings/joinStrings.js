const { lastName } = require("./solution/joinStrings-solution")

const firstName = "Carlos"
const lastname = "Stevenson"
const thisYear = 1965
const birthYear = 1947

const age = thisYear - birthYear

// Add your code right below, good luck!
console.log("Hello! My name is " + firstName + " " + lastname + " and I am "+ age +" years old.")




// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}

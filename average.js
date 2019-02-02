// function average(numbers) {
//   var sum = function (previousTotalValue, currentValue) {
//     return previousTotalValue + currentValue
//   }
//   return numbers.reduce(sum, 0) / numbers.length
// }

const length = data => data.length
const add = (val1, val2) => val1 + val2
const sum = numbers => numbers.reduce(add, 0)
const divide = (denominator, numerator) => denominator / numerator
const average = numbers => sum(numbers) / length(numbers)
// const average = numbers => divide(sum(numbers), length(numbers))

var numbers = [1, 2, 3, 4]
console.log(
  'average:', average(numbers)
)

// 주석 얘기가 나와서 올려봅니다.

// javascript 주석입니다.
// single-line  comment
/* multi-line comment */

const [a, , c, ] = numbers

console.log(
  'a:', a
)
console.log(
  'c:', c
)
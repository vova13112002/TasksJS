/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //exp-stat-

const myObject = {
  x: 10,
  y: true,
}
// exp-stat-

myObject.z = 'abc' //stat

delete myObject.x //stat

let newVariable //exp

newVariable = 30 + 5 //stat

console.log(newVariable)//exp

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
}//exp-inst

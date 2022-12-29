/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */
// Старт
// function isArrayEmpty(inputArray) {
//   if (inputArray.length > 0) {
//     return 'Массив не пустой'
//   } else {
//     return 'Массив пустой'
//   }
// }
//Варіант 1
// function isArrayEmpty (inputArray) {
//   if(inputArray.length>0){
//     return 'Масив не пустий'
//   }
//   if(inputArray.length==0){
//     return 'Масив пустий'
//   }
// }
//Варіант 2
// function isArrayEmpty(inputArray) {
//   return inputArray.length > 0 ? (
//     'Масив не пустий'
//   )
//     : (
//       'Масив пустий'
//     );

// }
//Варіант 3
const isArrayEmpty = (inputArray => {
  if (inputArray.length > 0) {
    return 'Масив не пустий';
  }
  return 'Масив пустий';
});
console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

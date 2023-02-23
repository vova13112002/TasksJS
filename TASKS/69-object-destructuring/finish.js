/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

// const objectWithNumbers = {
//   x: 5,
//   y: 20,
//   z: 3,
// }

// // Создайте функцию здесь

// const result = mult(objectWithNumbers)
// console.log(result)
// // 300



// Заполните новый массив(result) числами из старого(arr).
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.

function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];
  for(let i=0;i<arr.length;i++){
    result[i]=arr[i];
  }
console.log(result)
return result;

  
}
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof ();
// Должно получиться: [10, 20, 'Shopping - done', 40, 'Homework - done']

function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
for(let i=0;i<data.length;i++){
  if(typeof(data[i])==="number"){
    data[i]=data[i]*2;
  }
  if(typeof(data[i])==="string"){
    data[i] = `${data[i]} - done`;
  }
}
console.log(data);
  // Не трогаем
  return data;
}


// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: ['Homework', 20, 'Shopping', 10, 5]

function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
for(let i=0;i<=data.length;i++){
  result[i - 1] = data[data.length - i]
}
  console.log(result);
  // Не трогаем
  return result;
}



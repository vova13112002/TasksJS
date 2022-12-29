/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */



firstName= ('Volodymyr')
secondName= ('Handziuk')
myProfesion=('fronted devoloper')


const resultPIB1 = 'Мене звати ' + firstName + ' ' + secondName + ' и я ' + myProfesion

console.log(resultPIB1)

const resultPib2 = `Мене звати ${firstName} ${secondName} и я  ${myProfesion} `
console.log(resultPib2)
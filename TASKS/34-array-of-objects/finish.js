/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
let car =[
  {
  carBrand:'Audi',
  price:3500,
  isAvailableForSale:true,
  },
  {
    carBrand:'BMW',
    prise:1200,
    isAvailableForSale:false,
  },
  {
    carBrand:'Opel',
    prise:1000,
    isAvailableForSale:true,
  }
]
const newCar ={
   carBrand:'Land Rovel',
    prise:10000,
    isAvailableForSale:true,
}
car.push(newCar)

console.log(car)

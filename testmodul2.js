var numbers = [];
var randomNum
var arrLength = 100   // Задаем длинну массива
var numScale = 10000   // Задаем максимальный размер числа

for (var i = 0; i <= arrLength; i++ ){                         //Генерируем случайные числа
randomNum = Math.floor(((Math.random() - .5) * 2 )* (numScale + 1)); 
numbers.push(randomNum)
}
console.log(numbers);
exports.num = numbers;     //Готовим для отправки 
// Генератор случайного числового массива

var numbers = [];
var randomNum
var arrLength = 10000   // Задаем длинну массива
var numScale = 1000   // Задаем максимальный размер числа

for (var i = 0; i <= arrLength; i++ ){                         //Генерируем случайные числа
randomNum = Math.floor(Math.random() * (numScale + 1)); 
numbers.push(randomNum)
}

exports.num = numbers;     //Готовим для отправки 
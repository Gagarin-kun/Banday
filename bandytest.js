var numbers = require('./testmodul1');                            // Получаем массив с числами
console.log(numbers.num);                         // Просматриваем 
if (numbers.num.length <= 1) {
   console.log('Недастаточно чисел, для осуществления операции!')  // Проверяем, достаточно, ли чисел в массиве
} else {

for (var i = 0; i <= numbers.num.length - 2; i++) {         // Выстраиваем значения в массиве по возростанию
  var minValue = numbers.num[i];

  for (var j = i + 1; j <= numbers.num.length - 1; j++) {
    if (numbers.num[j] < minValue) {
      minValue = numbers.num[j];
      var swap = numbers.num[i];
      numbers.num[i] = minValue;
      numbers.num[j] = swap;
    }
  }
}
console.log(numbers.num);                                    // Смотрим на то что получилось

console.log('Сумма минимальных значений массива:' + (numbers.num[0] + numbers.num[1])); // Суммируем два минимальных значения и выводим результат
}
var numbers = [4, 0, 3, 19, 492, -10, 1];                            // Получаем массив с числами
console.log(numbers);                         // Просматриваем 
if (numbers.length <= 1) {
   console.log('Недастаточно чисел, для осуществления операции!')  // Проверяем, достаточно, ли чисел в массиве
} else {

for (var i = 0; i <= numbers.length - 2; i++) {         // Выстраиваем значения в массиве по возростанию
  var minValue = numbers[i];

  for (var j = i + 1; j <= numbers.length - 1; j++) {
    if (numbers[j] < minValue) {
      minValue = numbers[j];
      var swap = numbers[i];
      numbers[i] = minValue;
      numbers[j] = swap;
    }
  }
}
console.log(numbers);                                    // Смотрим на то что получилось

console.log('Сумма минимальных значений массива:' + (numbers[0] + numbers[1])); // Суммируем два минимальных значения и выводим результат
}
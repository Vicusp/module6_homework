// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент,
// то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и,
//  например, знаки, null и так далее.

// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
const generateArray = (length, max) => (
   [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
);
const numbers = generateArray(10, 40);
console.log(numbers);

let result = numbers.filter(function (elem) {
   if (elem % 2 == 0) {
      return true;
   } else {
      return false;
   }
}).map(i => x += i, x = 0).reverse()[0];

console.log(result);
let result2 = numbers.filter(function (elem) {
   if (elem % 1 == 0 && elem % 2 != 0) {
      return true;
   } else {
      return false;
   }
}).map(i => x += i, x = 0).reverse()[0];
console.log(result2);
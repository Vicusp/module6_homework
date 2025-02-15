// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.
const generateSumFinder = () => {
   const sum = (a, b) => a + b;     // создали функцию
   return sum;                      // и вернули её
};

const sum = generateSumFinder();   // sum теперь — функция, которую вернула функция generateSumFinder
sum(1, 5); // 6                 // sum складывает числа
// вызвали функцию, которая возвращает функцию,
// и тут же вызвали возвращенную функцию


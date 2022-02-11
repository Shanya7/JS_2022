// 2. Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise, робота якого завершується поверненням
//добутку елементів масиву, якщо вони є типу Numbers, або повідомленням " Error! Incorrect array! " у випадку, якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// // "Error! Incorrect array!"

function calcArrProduct(arr) {
  let mult = 1;
  arr.forEach((element) => {
    mult *= element;
  });
  return new Promise(function (resolve, reject) {
    if (Number.isInteger(mult)) {
      resolve(mult);
    } else {
      const error = new Error("Error! Incorrect array!");
      reject(error);
    }
  });
}

calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result)); //"Error! Incorrect array!"

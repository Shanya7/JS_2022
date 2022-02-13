// 3. Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд).
// Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. 
//Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, то одиниця повинна дочекатися виведення  нуля і тільки потім почати свій відлік
// (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, який резолвиться 
//поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.

// Приклад  роботи:
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// function showNumbers() {
// 	// your code with using delay(i, time)
// }
// showNumbers();
// Результат: 
// з різним рендомним інтервалом (наприклад від 0 до 3 сек) в консоль послідовно  виводяться числа 0,1,2,3,4,5,6,7,8,9 
const delay = (i, time) =>new Promise((resolve) => setTimeout(() => resolve(i), time));
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function showNumbers() {
    let time = 0;
    for (let i = 0; i <= 10; i++) {
        time+= getRndInteger(1000,3000)
        delay(i,time).then(function (data) {
          console.log(data);
        })
    }
}
showNumbers();


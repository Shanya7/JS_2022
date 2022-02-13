//Задачу номер 3 потрібно реалізувати без застосування промісів. Переписати функцію showNumbers, використовуючи конструкцію async/await;
const delay = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));
async function showNumbers() {
  for (let i = 0; i <= 10; i++) {
    await delay(Math.random() * (3000 - 1000) + 1000);
    console.log(i);
  }
}
showNumbers();

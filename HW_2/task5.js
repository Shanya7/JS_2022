/*5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
 Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. 
 Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”.
  Якщо вік менше 10 років вивести “Ви ще надто молоді”, */

  //#1
  let isAdult = prompt("How old are you? ")

  if(isAdult>=18){
     alert("Ви досягли повнолітнього віку");
  }
  else if(isAdult>=10) {
   alert("Ви не досягли повнолітнього віку");
  }
  else if(isAdult<10)
  {
     alert("Ви ще надто молоді");
  }
 else if(isAdult === NaN){
   alert("Incorrect value");
}



  //#2

  let isAdult = prompt("How old are you? ")

  isAdult>=18 ? alert("Ви досягли повнолітнього віку") : alert("Ви ще надто молоді");

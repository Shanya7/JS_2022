    /*2.  Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.    
    Підключіть створений файл до HTML-документу.
    */

    const lastName = "Shepel";
    console.log(lastName);

    /*3.
    a) оголосіть дві змінні;
    b) запишіть у змінні будь-які значення;
    c) виведіть на екран значення змінних;
    d) скопіюйте значення однієї змінної в іншу;
    e) виведіть на екран значення змінних.
    */

    // let product1 = "iPhone";
    // let product2 = "Samsung";

    // document.write(`Product 1 is ${product1}.<br/> Product 2 is ${product2} <p/>`);

    // product2=product1;

    // document.write(`Product 1 is ${product1}.<br/> Product 2 is ${product2}`);

    /*4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”.
     Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
    */
   let student = {
       name: "Tom",
       age: 19,
       hasScholarship: false,
       university: null,
       city: undefined

   }
   console.log(typeof(student.name));
   console.log(typeof(student.age));
   console.log(typeof(student.hasScholarship));
   console.log(typeof(student.university));
   console.log(typeof(student.city));

/*5. Використовуючи функцію confirm() задайте користувачу питання про
 досягнення ним повнолітнього віку. 
 Результат запишіть в змінну isAdult і виведіть в консоль.
*/
let isAdult = confirm("Are you over 18");
console.log(isAdult);

/*6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні,
 для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного 
стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, 
в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно.
 Виведіть їх тип в консоль.
 */


 /*7. За допомогою функції prompt() напишіть скріпт, який послідовно 
 запитує в користувача логін, емейл та пароль, і виводить на екран 
 повідомлення із введеними даними. Наприклад “Dear User, 
 your email is usermale@gmail.com, your password is qwerty”.
*/

let login = prompt("Enter your login");
let email = prompt("Enter your email");
let password = prompt("Enter your password");

document.write(`Dear ${login}, your email is ${email}, your password is ${password}`)

/*8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, 
в місяці, записує результати в відповідні змінні, і виводить їх значення
 на екран.

*/

/*
 Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true

*/
function checkEmail (value) {
    let regExp=/\w+|\d+\S+/g;
   let result = regExp.test(value);
   return result;
}
console.log(checkEmail("Qmail2@gmail.com"))



function checkEmail2 (value) {
    let regExp=/\S+@\S+\.\S+/;
   let result = regExp.test(value);
   return result;
}
console.log(checkEmail2("Qmail2@gmail.com"))

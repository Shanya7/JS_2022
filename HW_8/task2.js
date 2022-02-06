/*
 Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true

*/
function checkEmail (value) {
    let regExp=/\w+\d+@+.+/g
   let result = regExp.test(value);
   return result
}
console.log(checkEmail("Qmail2@gmail.com"))


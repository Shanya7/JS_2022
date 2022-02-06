// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// 	Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лише символи “_” і “-”.
//  •  Символ “-” не може повторюватися, не може бути 1-им символом емейлу.

function checkEmail(email) {
  let regExp = /^\w+@/g;
  let result = regExp.test(email);
  if (result == true) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}
checkEmail("my_mail@gmail.com");
// Email is correct!
checkEmail("#my_mail@gmail.com");
// Email is not correct!

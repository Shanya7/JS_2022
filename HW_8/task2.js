function checkEmail (value) {
    let regExp=/.+\@.+\..+/g;
   let result = regExp.test(value);
   return result;
}
console.log(checkEmail("Qmail2@gmail.com"))





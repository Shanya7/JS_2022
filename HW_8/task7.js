function checkLogin(login) {
  let checkLog = /^[a-z]{1}[\w|\d+\.\d+]{1,9}$/i;
  let decimalNum = /\d+\.\d+|\d+/g;
  console.log(checkLog.test(login));
  console.log(login.match(decimalNum));
}
checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");

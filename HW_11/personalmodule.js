function printMessage() {
  const date = new Date();

  const currentHour = date.getHours();
  const time = `Date of request ${date}`;
  const os = require("os");
  const username = os.userInfo().username;
  let text;

  if (currentHour > 18 && currentHour < 24) {
    text = "Good evening, ";
  } else if (currentHour > 0 && currentHour < 5) {
    text = "Good night, ";
  } else if (currentHour > 6 && currentHour < 11) {
    text = "Good morning, ";
  } else {
    text = "Good afternoon, ";
  }
  let message = time + "<br>" + text + " " + username;
  return message;
}

console.log(printMessage());
module.exports.printMessage = printMessage;

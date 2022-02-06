function upperCase(value) {
  let firstLetter = /^[A-Z]/;

  if (firstLetter.test(value))
    return "String's starts with uppercase character";
  else return "String's not starts with uppercase character";
}
upperCase("regexp");
upperCase("RegExp");

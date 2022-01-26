/*2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить
 список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.*/

let myObj = {
  field1: "value1",
  field2: "value2",
  field3: "value3",
  field4: "value4",
  field5: "value5",
};
let myArrayKeys = [];
let myArrayValues = [];
function showProps(obj) {
  obj = myObj;
  //console.log(obj)
  for (let i in obj) {
    //console.log(i)
    myArrayKeys.push(i);
    myArrayValues.push(myObj[i]);
  }

  return myArrayKeys + myArrayValues;
  // console.log(myArrayValues)
  // console.log(myArrayKeys)
}

console.log(showProps());
//console.log(showProps(myArrayKeys));

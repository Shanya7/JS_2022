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
  for (let i in obj) {
    myArrayKeys.push(i);
    myArrayValues.push(myObj[i]);
  }

  const result = [myArrayKeys, myArrayValues];
  return ("List of properties: " + result[0] +"  List of property values: " +  result[1] );
}

console.log(showProps());

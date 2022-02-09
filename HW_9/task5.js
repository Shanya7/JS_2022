function mapBuilder(keysArray, valuesArray) {
  const newMap = new Map();

  for (let i in keysArray) {
    newMap.set(keysArray[i], valuesArray[i]);
  }
  console.log(newMap);
  return newMap;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); //

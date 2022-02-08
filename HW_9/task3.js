function mul(...element) {
  let v = element;
  let mult = 1;
  for (let i of v) {
    if (isNaN(i)) {
      continue;
    } else {
      mult = mult * i;
    }
  }
  return mult;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

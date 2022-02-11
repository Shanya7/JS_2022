function getPromise(message, delay) {
  const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(message);
    }, delay);
  });
  return p;
}

getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

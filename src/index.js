module.exports = function getZerosCount(number, base) {
  let baseSimple = [];
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let simple = {};
        simple.value = i;
        simple.simpleNum = 1;
      
        base = base / i;
      while (base % i === 0) {
        simple.simpleNum++;
        base = base / i;
      }
      baseSimple.push(simple);
    }
  }
  let result = [];
  
  baseSimple.forEach(function (item, i, array) {
    let simpleNumber = factorial(number, item.value);
    result.push(Math.floor(simpleNumber / item.simpleNum));
  });

  function factorial(n,k) {
    let result = 0;
    while (n) {
      n = Math.floor(n / k);
      result += n;
    }
    return result;
  }

  return result.sort(function (a, b) {
    return a - b;
  })[0];
}
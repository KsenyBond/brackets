module.exports = function check(str, bracketsConfig) {
  let iterations,
      result = false,
      stringArray = [];

  if (!(str.length % 2)) {
      bracketsConfig.forEach(function (value) {
          stringArray.push(value[0] + value[1]);
      });

      iterations = str.length / 2;

      for (let i = 0; i < iterations; i++) {
          stringArray.forEach(function (value) {
              str = str.replace(value, '');
          });

          if (str.length === 0) {
              result = true;
          }
      }
  }

  return result;
};
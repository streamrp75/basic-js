const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)) throw Error;
  if (array.length === 0 || typeof(array) != 'object') return array;

  let answer = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == '--discard-next' || array[i] == '--discard-prev' || array[i] == '--double-next' || array[i] == '--double-prev') {
      continue;
    }

    if (array[i - 1] == '--discard-next') {
      continue;
    }

    if (array[i - 1] == '--double-next') {
     answer.push(array[i], array[i]);
    } else {
     answer.push(array[i]);
    }

    if (array[i + 1] == '--discard-prev') {
     answer.splice(answer.length - 1, 1);
    }

    if (array[i + 1] == '--double-prev') {
       answer.push(array[i]);
    }
  }

  return answer;
};
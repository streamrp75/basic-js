const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError('Not implemented');
  let count=0;
  matrix.forEach((elem) => {
    elem.forEach((el) => {
      if(el == "^^")
      {
        count +=1
      }
    })
  })
};

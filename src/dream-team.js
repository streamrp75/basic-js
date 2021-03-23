const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(matrix) {
  let name ="";
  if (matrix==null || typeof(matrix) != "object" || matrix[0]==null ){
    return false;
  }else{
  matrix.forEach((elem) => {
    if (typeof(elem) == "string")
    {
      elem=elem.trim()
      name=name+elem[0].toUpperCase()
    }
  });
  if(name.length == 0 ){
    return false;
  }else{
    return name.split("").sort().join("")
  }
  }
}

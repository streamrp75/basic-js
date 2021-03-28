const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr, deep) {
    if (deep === undefined){
      deep=1
    }
    let depth, maxDepth = deep
    for (let i = 0; i < arr.length; i++) {
      if (typeof (arr[i]) === "object") {
        depth = this.calculateDepth(arr[i], deep + 1)
        if (depth > maxDepth) maxDepth = depth
      }
     
    }
    return maxDepth
  }
}
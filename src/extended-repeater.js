const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let answer=[]
let substringAddition=''
let addition=[]
if(options.separator===undefined){
  options.separator='+'
}
if(options.additionSeparator===undefined){
  options.additionSeparator='|'
}
if(options.addition!==undefined)
addition.push(options.addition+'')
if(options.additionRepeatTimes>1 &&options.additionRepeatTimes!==undefined)
{
  for(let i=1;i<options.additionRepeatTimes;i++)
  {
    addition.push(options.addition+'')
  }
}
addition=addition.join(options.additionSeparator)
substringAddition=str+addition
answer.push(substringAddition)
if(options.repeatTimes>0)
for(let i=1;i<options.repeatTimes;i++){
answer.push(substringAddition)
}
answer=answer.join(options.separator)
return answer;
};
  
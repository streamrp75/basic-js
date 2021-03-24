const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(Number(sampleActivity)!= sampleActivity || typeof(sampleActivity)!="string" || sampleActivity ==="" || sampleActivity<=0)
    { 
      return false
    }else
    {
      if(Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD))<0 || Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD))==Infinity){
        return false
      }else{
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD))
    }
  
}
};

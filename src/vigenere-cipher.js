const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? 'reverse' : 'direct';
  }
  encrypt(message,key) {
    message=message.split('')
    let messageLenght=message.length
    key=key.toUpperCase().split('')
    let keyLength=key.length
    let answer=new Array(messageLenght)
    let i=0
    message.forEach(element => {
    if(element.toLowerCase()!==element.toUpperCase()){
      if(i==keyLength){
          i=0
        }
          element=element.toUpperCase()
        let simbol=String.fromCharCode((element.charCodeAt()+key[i].charCodeAt())%26+65)
        answer.push(simbol)
        i++
    }else
    {
      answer.push(element)
      
    }
    });
    if(this.type=='reverse'){
    return answer.reverse().join('')
    }else{
      return answer.join('')
    }
  }   
    decrypt(message,key) {
    message=message.split('')
    let messageLenght=message.length
    key=key.toUpperCase().split('')
    let keyLength=key.length
    let answer=new Array(messageLenght)
    let i=0
    message.forEach(element => {
    if(element.toLowerCase()!==element.toUpperCase()){
      if(i==keyLength){
          i=0
        }
          element=element.toUpperCase()
        let simbol=String.fromCharCode((element.charCodeAt()+26-key[i].charCodeAt())%26+65)
        answer.push(simbol)
        i++
    }else
    {
      answer.push(element)
      
    }
    });
    if(this.type=='reverse'){
      return answer.reverse().join('')
      }else{
        return answer.join('')
      }
  }
}  
module.exports = VigenereCipheringMachine;

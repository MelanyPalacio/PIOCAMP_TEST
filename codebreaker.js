var realNumber = '5612';

const guess = function(number1) {
  let estandar = realNumber.split('')
  let actual = number1.split('')
  var a = 0;
  var result = ''
  console.log(realNumber);
  
  for (var i=0; i<estandar.length; i++){
    a = 0;
    for (var y=0; y<estandar.length; y++){
      if (actual[i] == estandar[y]){
        a = 1;
        if (y == i){ result += 'X'; }
        else{ result += '0'; }
      }
    }
    if(a == 0){ result += '-'; }
  }
  return result;
}
module.exports = guess;
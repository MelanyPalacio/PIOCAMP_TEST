// Import test
let test = require('assert');
var codebreaker = require('../codebreaker');

describe('Test pass', function () {
  it('is true', function () {
    let saludo = "Hola";
    test.equal(saludo, "Hola", "Saludo es no igual a Hola");
  })
})

describe('Codebreaker Test', function () {

  beforeEach(function () {
    codebreaker.setNumber('5612')
  })

  it('Debe retornar un ---0', function () {
    let result = codebreaker.guess("0981");
    test.equal(result, "0", "Tiene un numero correcto en la posicion incorrecta");
  })

  it('Debe retornar un 0000', function () {
    let result = codebreaker.guess("1555");
    test.equal(result, "0X", "Tiene dos numeros correctos en posiciones incorrectar");
  })
  it('Debe retornar un 00-X', function () {
    let result = codebreaker.guess("2542");
    test.equal(result, "0X", "Hay dos numeros correctos en posicion incorrecta y uno en posicion correcta");
  })
  it('Debe retornar un X--X', function () {
    let result = codebreaker.guess("5792");
    test.equal(result, "0X", "Hay dos numeros en la posicion correcta");
  })
  it('Debe retornar un 0XX0', function () {
    let result = codebreaker.guess("2615");
    test.equal(result, "0X", "Hay dos numeros en la posicion correcta y dos numeros en la posicion incorrecta");
  })
  it('Debe retornar un ----', function () {
    let result = codebreaker.guess("3478");
    test.equal(result, "0X", "Ningun numero esta correcto");
  })
  it('Debe retornar un ----', function () {
    let result = codebreaker.guess("CSUD");
    test.equal(result, "0X", "Tu respuesta debe ser numerica");
  })
  it('Debe retornar un ', function () {
    let result = codebreaker.guess("");
    test.equal(result, "0X", "Para un resultado debes ingresar un numero de 4 digitos");
  })
  it('Debe retornar un --', function () {
    let result = codebreaker.guess("08");
    test.equal(result, "0X", "Deben ser 4 numeros");
  })
  it('Debe retornar un XXXX', function () {
    let result = codebreaker.guess("5612");
    test.equal(result, "0X", "Felicidades, todos los numeros estan correctos");
  })
  it('Debe retornar un ', function () {
    let result = codebreaker.guess("-_,.");
    test.equal(result, "0X", "Para un resultado deben ser numeros y no iconos");
  })
})

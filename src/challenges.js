/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// Desafio 1
function compareTrue(param1, param2) {
  return (param1 && param2);
}
// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
// Desafio 3
function splitSentence(param) {
  return param.split(' ');// referência: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254//
}

// Desafio 4
function concatName(recebe) {
  let firstName = recebe[0];
  let lastName = recebe[recebe.length - 1];
  let strName = `${lastName},${firstName}`;
  return concatName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let footballPoints = wins * 3 + ties;
  return footballPoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

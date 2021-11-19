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
  return param.split(' '); // referência: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254//
}

// Desafio 4
function concatName(name) {
  let novo = '';
  novo = name[name.length - 1] + ', ' + name[0];
  return novo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points; // ou return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumbers = numbers[0];
  let numbRepit = 0;
  for (let i = 1; i <= numbers.length; i += 1) {
    if (maiorNumbers < numbers[i]) {
      maiorNumbers = numbers[i];
    }
  }
  for (let index = 0; index <= numbers.length; index += 1) {
    if (maiorNumbers === numbers[index]) {
      numbRepit += 1;
    }
  }

  return numbRepit;
}

// Desafio 7
// let gato1 = 7;
// let gato2 = 1;
// let rato = 4;

function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(rato, gato1, gato2));

// Desafio 8
function fizzBuzz(arrNumbers) {
  let processed = [];
  arrNumbers.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      processed.push('fizzBuzz');
    } else if (element % 5 === 0) {
      processed.push('buzz');
    } else if (element % 3 === 0) {
      processed.push('fizz');
    } else {
      processed.push('bug!');
    }
  });
  return processed;
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

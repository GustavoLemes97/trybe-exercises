/** -----------------------01------------------------ */
function sum(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}
/** ------------------------02----------------------- */

function maxOf_2(num1, num2) {
  if (num1 > num2) {
    return num1 + ' é o maior número.';
  } else if (num2 > num1) {
    return num2 + ' é o maior número.';
  } else {
    return 'Não se aplica.';
  }
}
/** ------------------------03----------------------- */

function maxOf_3(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + ' é o maior número.';
  } else if (num2 > num1 && num2 > num3) {
    return num2 + ' é o maior número.';
  } else if (num3 > num1 && num3 > num2) {
    return num3 + ' é o maior número.';
  } else {
    return 'Não se aplica.';
  }
}
/** ------------------------04----------------------- */

function numericSign(number) {
  if (number > 0) {
    return 'Número positivo.';
  } else if (number < 0) {
    return 'Número negativo.';
  } else {
    return 'Zero.';
  }
}
/** ------------------------05----------------------- */

function checkTriangle(ang1, ang2, ang3) {
  if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    return 'Ângulo inválido!';
  } else if (ang1 + ang2 + ang3 === 180) {
    return true;
  } else {
    return false;
  }
}
/** ------------------------06----------------------- */

function chessMoviment(chessPiece) {
  switch (chessPiece) {
    case 'king':
      return 'Se move na horizontal, vertical e diagonal, uma casa por vez.';

    case 'queen':
      return 'Se move na horizontal, vertical e diagonal.';

    case 'bishop':
      return 'Se move na diagonal.';

    case 'pawn':
      return 'Se move para frente(duas casas se for primeiro movimento do jogo) e diagonal(se for capturar peça inimiga).';

    case 'knight':
      return 'Se move em L.';

    case 'rook':
      return 'Se move na horizontal e vertical.';

    default:
      return 'erro';
  }
}
/** ------------------------07----------------------- */

function convertGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else if (grade >= 50) {
    return 'E';
  } else if (grade < 50) {
    return 'F';
  } else {
    return 'erro';
  }
}

/** ------------------------08----------------------- */

function checkEven(number_1, number_2, number_3) {
  if (number_1 % 2 === 0 || number_2 % 2 === 0 || number_3 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
/** ------------------------09----------------------- */

function checkOdd(number_1, number_2, number_3) {
  if (number_1 % 2 !== 0 || number_2 % 2 !== 0 || number_3 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
/** ------------------------10----------------------- */

function profitValue(saleValue, costValue) {
  if (saleValue < 0 || costValue < 0) {
    return 'erro';
  } else {
    let profit = saleValue - (costValue + costValue * 0.2);
    return 'Lucro:' + profit;
  }
}
/** ------------------------11----------------------- */

function checkNetPay(grossPay) {
  let grossLessINSS;
  let netPay;
  if (grossPay <= 0) {
    return 'erro';
  } else if (grossPay <= 1556.94) {
    grossLessINSS = grossPay - grossPay * 0.08;
  } else if (grossPay >= 1556.95 && grossPay <= 2594.92) {
    grossLessINSS = grossPay - grossPay * 0.09;
  } else if (grossPay >= 2594.93 && grossPay <= 5189.82) {
    grossLessINSS = grossPay - grossPay * 0.11;
  } else {
    grossLessINSS = grossPay - 570.88;
  }

  if (grossLessINSS <= 1903.98) {
    netPay = grossLessINSS;
    return 'Salário Líquido:' + netPay;
  } else if (grossLessINSS >= 1903.99 && grossLessINSS <= 2826.65) {
    netPay = grossLessINSS - (grossLessINSS * 0.075 - 142.8);
    return 'Salário Líquido:' + netPay;
  } else if (grossLessINSS >= 2826.66 && grossLessINSS <= 3751.05) {
    netPay = grossLessINSS - (grossLessINSS * 0.15 - 354.8);
    return 'Salário Líquido:' + netPay;
  } else if (grossLessINSS >= 3751.06 && grossLessINSS <= 4664.68) {
    netPay = grossLessINSS - (grossLessINSS * 0.225 - 636.13);
    return 'Salário Líquido:' + netPay;
  } else {
    netPay = grossLessINSS - (grossLessINSS * 0.275 - 869.36);
    return 'Salário Líquido:' + netPay;
  }
}

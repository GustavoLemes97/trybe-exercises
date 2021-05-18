let firstNumber = 1000;
let secondNumber = 870;
let thirdNumber = 901;

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(firstNumber, ': é o maior número.')
}

else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log(secondNumber, ': é o maior número.')

}

else if(thirdNumber > firstNumber && thirdNumber > secondNumber){
    console.log(thirdNumber, ': é o maior número.')

}

else {
    console.log('Não se aplica.');
}
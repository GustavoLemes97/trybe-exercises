let angulo_1 = 20;
let angulo_2 = 60;
let angulo_3 = 100;

if(angulo_1 < 0 || angulo_2 < 0 || angulo_3 < 0 ){
    console.log('Ângulo inválido!');
}

else if((angulo_1 + angulo_2 + angulo_3) === 180){
    console.log(true);
}

else{
    console.log('erro');
}
let salarioBruto = 3000;
let brutoMenosINSS;
let salarioLiquido;

if(salarioBruto <= 0){
    console.log('erro');
}
else if(salarioBruto <= 1556.94){
    brutoMenosINSS = salarioBruto - salarioBruto * 0.08;
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    brutoMenosINSS = salarioBruto - salarioBruto * 0.09;
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    brutoMenosINSS = salarioBruto - salarioBruto * 0.11;
}
else {
    brutoMenosINSS = salarioBruto - 570.88;
}

if(brutoMenosINSS <= 1903.98){
    salarioLiquido = brutoMenosINSS;
    console.log('Salário Líquido:', salarioLiquido);
}
else if(brutoMenosINSS >= 1903.99 && brutoMenosINSS <= 2826.65){
    salarioLiquido = brutoMenosINSS - ((brutoMenosINSS * 0.075) - 142.8 )
    console.log('Salário Líquido:', salarioLiquido);

}
else if(brutoMenosINSS >= 2826.66 && brutoMenosINSS <= 3751.05){
    salarioLiquido = brutoMenosINSS - ((brutoMenosINSS * 0.15) - 354.8 )
    console.log('Salário Líquido:', salarioLiquido);

}
else if(brutoMenosINSS >= 3751.06 && brutoMenosINSS <= 4664.68){
    salarioLiquido = brutoMenosINSS - ((brutoMenosINSS * 0.225) - 636.13 )
    console.log('Salário Líquido:', salarioLiquido);

}
else{
    salarioLiquido = brutoMenosINSS - ((brutoMenosINSS * 0.275) - 869.36 )
    console.log('Salário Líquido:', salarioLiquido);
}
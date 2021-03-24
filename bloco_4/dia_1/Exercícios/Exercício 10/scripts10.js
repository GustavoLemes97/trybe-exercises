let saleValue = 150;
let costValue = 50;
let profit;

if( saleValue < 0 || costValue < 0){
    console.log('erro');
}
else{
    profit = saleValue - (costValue + costValue * 0.2);
    console.log('Lucro:', profit);
}
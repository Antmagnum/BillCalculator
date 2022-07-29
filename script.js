'use strict';

let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let bill = document.getElementById('billAmount').value;
    let tipAmount = bill <= 950 && bill >= 50 ? bill * 0.1 : bill < 50 ? bill * .2: bill * .075;
    let tipPercentage = bill <= 950 && bill >= 50 ? 10 : bill < 50 ? 20: 7.5;

    document.getElementById('tipPercent').value = tipPercentage;
    document.getElementById('tipAmount').value = tipAmount;
    document.getElementById('totalBill').value = parseFloat(bill) + parseFloat(tipAmount);

console.log(bill);
console.log(tipAmount);
console.log();
})
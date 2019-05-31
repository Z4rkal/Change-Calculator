// Write your JavaScript here
function calculateChange(amtDue,amtGiven) {
/*    //amtDue = parseInt(String(amtDue * 100));
    //amtGiven = parseInt(String(amtGiven * 100));
    changeDue = amtGiven - amtDue;//parseInt(String(amtGiven - amtDue));
*/  var result = []; //[dollars,quarters,dimes,nickels,pennies]
    changeDue = amtGiven - amtDue;
    // console.log('Change due: ' + changeDue);
    var [twdol,twdolC] = handleCalculation(changeDue,2000);
    var [tdol,tdolC] = handleCalculation(twdolC,1000);
    var [fdol,fdolC] = handleCalculation(tdolC,500);
    var [ddol,ddolC] = handleCalculation(fdolC,200);
    var [dol,dolC] = handleCalculation(ddolC,100);
    // console.log(dol + ' ' + dolC);
    var [qrt,qrtC] = handleCalculation(dolC,25);
    var [dim,dimC] = handleCalculation(qrtC,10);
    var [nic,nicC] = handleCalculation(dimC,5);
    var [pen,] = handleCalculation(nicC,1);
/*  console.log('Due: ' + amtDue + ' Given: ' + amtGiven + ' Total Change: ' + changeDue + '\n');
    var [dol,dolC] = handleCalculation(changeDue,1);
    console.log('Dollars ' + dol + '\n');
    var [qrt,qrtC] = handleCalculation(dolC,.25);
    console.log('Quarters: ' + qrt + '\n');
    var [dim,dimC] = handleCalculation(qrtC,.1);
    console.log('Dimes: ' + dim + '\n');
    var [nic,nicC] = handleCalculation(dimC,.05);
    console.log('Nickels: ' + nic + '\n');
    var [pen,] = handleCalculation(nicC,.01);
    console.log('Pennies: ' + pen + '\n'); */
    result = [twdol,tdol,fdol,ddol,dol,qrt,dim,nic,pen];
    return result;
}
function handleCalculation(num,div) {
   /* console.log(num);
    num = parseInt(String(num * 100));
    div = parseInt(String(div * 100));
    var rem = num / 100 - parseInt(String(num / div));
    console.log(rem);
    var result = [parseInt(String(num / div)),parseInt(String(rem)) / 100];
    console.log('Num: ' + (num / 100) + ' Div: ' + (div / 100) + ' Rem: ' + (rem / 100) + ' Result: ' + result[0] + '\n'); */
    var result = 0;
    while(num - ((result + 1) * div) >= 0) {
        result++; 
        // console.log(result * div + ' ' + result + ' ' + (num - (result * div)));
    }
    var remainder = num - (result * div);
    // console.log('Result: ' + result + ' Remainder: ' + remainder);
    return [result,remainder];
}

function handleClickEvent() {
    // console.log(document.getElementById('amount-due').value);
    // console.log(document.getElementById('amount-received').value);
    if(parseInt(String(document.getElementById('amount-due').value * 100)) > parseInt(String(document.getElementById('amount-received').value * 100))) {
        //console.log('The customer didn\'t give enough money!');
    document.getElementById('error-field').textContent = 'The customer didn\'t give you enough money!';
    document.getElementById('dollars-output').textContent = '0';
    document.getElementById('twdol-output').textContent = '0';
    document.getElementById('tdol-output').textContent = '0';
    document.getElementById('fdol-output').textContent = '0';
    document.getElementById('ddol-output').textContent = '0';
    document.getElementById('dol-output').textContent = '0';
    document.getElementById('dollars-output').textContent = '0';
    document.getElementById('quarters-output').textContent = '0';
    document.getElementById('dimes-output').textContent = '0';
    document.getElementById('nickels-output').textContent = '0';
    document.getElementById('pennies-output').textContent = '0';
    }
    else {
    var result = calculateChange(parseInt(String(document.getElementById('amount-due').value * 100)),parseInt(String(document.getElementById('amount-received').value * 100)));
    document.getElementById('error-field').textContent = '';
    document.getElementById('dollars-output').textContent = (result[0] * 20 + result[1] * 10 + result[2] * 5 + result[3] * 2 + result[4]);
    document.getElementById('twdol-output').textContent = result[0];
    document.getElementById('tdol-output').textContent = result[1];
    document.getElementById('fdol-output').textContent = result[2];
    document.getElementById('ddol-output').textContent = result[3];
    document.getElementById('dol-output').textContent = result[4];
    document.getElementById('quarters-output').textContent = result[5];
    document.getElementById('dimes-output').textContent = result[6];
    document.getElementById('nickels-output').textContent = result[7];
    document.getElementById('pennies-output').textContent = result[8];
    }
}

document.getElementById('calculate-change').onclick = function(){
    // console.log('Click!');
    handleClickEvent();
};

    //console.log('Result: ' + calculateChange(1021,2000) + '\n');
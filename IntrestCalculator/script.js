const principlAmount =document.getElementById("check1");
const intrest =document.getElementById("check2");
const period =document.getElementById("check3");
principlAmount=parseFloat(principlAmount.value);
intrest = parseFloat(intrest.value);
period= parseInt(period.value);

function simpleIntrest(pamount,intrest,period){
    let result=(pamount*intrest*period)/100;
}
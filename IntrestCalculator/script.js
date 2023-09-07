

function simpleIntrest(principlAmount,intrest,period){
    // let principlAmount =document.getElementById("check1");
    // let intrest =document.getElementById("check2");
    // let period =document.getElementById("check3");
    principlAmount=parseFloat(principlAmount.value);
    intrest = parseFloat(intrest.value);
    period= parseInt(period.value);
    let output1=document.getElementById("output1");
    let output2=document.getElementById("output2");
    let output3=document.getElementById("output3");
    let result=(principlAmount*intrest*period)/100;
    return result;
}
function main(){
    let principlAmount =document.getElementById("check1");
    let intrest =document.getElementById("check2");
    let period =document.getElementById("check3");
    let outcome=simpleIntrest(principlAmount,intrest,period);
    output1.textContent="Principle Amount: "+principlAmount.value;
    output2.textContent="Intrest is: "+intrest.value;
    output3.textContent="Total is: "+outcome;

}
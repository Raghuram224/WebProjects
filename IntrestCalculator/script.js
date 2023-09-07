function timeC(time) {
    let result = 0;
    switch (time) {
        case "year":
            result = 1;
            break;
        case "quarters":
            result = 0.25;
            break;
        case "month":
            result = 1 / 12;
            break;
        case "week":
            result = 1 / 52;
            break;
        case "days":
            result = 1 / 365;
            break;
    }
    return result;
}
function simpleInterest() {
    let principlAmount = document.getElementById("check1");
    let intrest = document.getElementById("check2");
    let period = document.getElementById("check3");
    let time = document.getElementById("time");

    let principlAmountValue = parseFloat(principlAmount.value);
    let intrestValue = parseFloat(intrest.value);
    let periodValue = parseInt(period.value);
    let timeValue = time.value;

    let result = (principlAmountValue * intrestValue * periodValue * timeC(timeValue)) / 100;
    return result;
}





function main() {
    let principlAmount = document.getElementById("check1");
    
    let output1 = document.getElementById("inner1");
    let output2 = document.getElementById("inner2");
    let output3 = document.getElementById("inner3");

    let outcome = simpleInterest();

    output1.textContent =principlAmount.value;
    output2.textContent =outcome;
    output3.textContent =parseFloat(principlAmount.value)+parseFloat(outcome);
}

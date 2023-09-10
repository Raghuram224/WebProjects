const INFOWINDOW = document.getElementById("info");
const BMIWINDOW = document.getElementById('bmi-box');
let buttonCount = 0;

let height=document.getElementById("height");
let weight= document.getElementById("weight");
let result=document.getElementById("res");
let span= document.getElementById("span");

function comment(output){
    output=parseFloat(output);   
    console.log(output);
    
    if (output < 16) {
        span.textContent = "Severe Thinness";
    } else if (output < 17) {
        span.textContent = "Moderate Thinness";
    } else if (output < 18.5) {
        span.textContent = "Mild Thinness";
    } else if (output < 25) {
        span.textContent = "Normal";
    } else if (output < 30) {
        span.textContent = "Overweight";
    } else if (output < 35) {
        span.textContent = "Obese Class I";
    } else if (output < 40) {
        span.textContent = "Obese Class II";
    } else if (output >= 40) {
        span.textContent = "Obese Class III";
    } else {
        span.textContent = "Invalid Values!";
    }
}

function main(){
    if(height.value !=""  && weight.value !=""){
        height=parseFloat(height.value)/100;       
        let output=parseFloat(weight.value)/(height*height);
        output=output.toFixed(2);
        result.textContent=output;
        comment(output);
    }
    
}

function showInfo(){

    if (buttonCount % 2 === 0){
        INFOWINDOW.style.transform = 'translateX(-115%)';
    }
    else {
        INFOWINDOW.style.transform = 'translateX(0%)';
    }

    buttonCount++;
}



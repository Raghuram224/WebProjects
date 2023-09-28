const countdownTimeInSeconds = 60;
let remainingTime = countdownTimeInSeconds;
let timer;
let timerStatus = false;
let dark_mode=0;

const  TIME=_('time');
const MESSAGE=_('msg');

function _(id){
    return document.getElementById(id);
}
function darkMode(){
    if(dark_mode%2==0){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        dark_mode++;
        document.body.style.transition="350ms ease-in-out";
        
        
    }
    else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        document.body.style.transition="350ms ease-in-out";
        dark_mode++;
        
    }
   

   
}
function updateTimer(){
    let range=_('time-input');
    let displayRange=_('time-range');
    displayRange.textContent=range.value;
}
function updateBreak(){
    let range=_('break-input');
    let displayRange=_('break-range');
    displayRange.textContent=range.value;
}
function reset(){
    TIME.textContent="00:00";
    pause();
    remainingTime=countdownTimeInSeconds;
    timerStatus=false;
}

function pause(){
    console.log("pause");
    clearInterval(timer);
    timerStatus=false;
    
}
function startTimer(){
    let minutes=Math.floor(remainingTime/60);
    let seconds=remainingTime%60;
    console.log(remainingTime);
    
    console.log(`${minutes}:${seconds}`);
    if(remainingTime===0){
        
        MESSAGE.textContent= "Time's Up";
        TIME.textContent="00:00";
        clearInterval(startTimer);
        
    }else{        
        TIME.textContent=`${minutes}:${seconds}`;
        console.log(remainingTime);
        remainingTime-=1;
    }

}

function start(){
    
    if(!timerStatus){
      timer=setInterval(startTimer,1000);
    timerStatus = true;
    }
    // TIME.textContent=timeStarts;
}
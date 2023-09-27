const countdownTimeInSeconds = 60;
let remainingTime = countdownTimeInSeconds;
let timer;
let timerStatus = false;

const  TIME=_('time');
const MESSAGE=_('msg');

function _(id){
    return document.getElementById(id);
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
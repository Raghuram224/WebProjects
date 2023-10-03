

// let countdownTimeInSeconds =parseInt(updateTimer().value)*60;
let countdownTimeInSeconds =1*60;

let breakCount=0;
let remainingTime = countdownTimeInSeconds;
let timer;
let timerStatus = false;
let dark_mode=0;
let timeControl=0;

const  TIME=_('time');
const MESSAGE=_('msg');
const STATUS=_('status');

function _(id){
    return document.getElementById(id);
}

function breakTimer(){
    // let breakTime= updateBreak();
    let breakTime=1*60;
    
    remainingTime=breakTime;
    start();

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
    
    countdownTimeInSeconds = parseInt(range.value) * 60;
    remainingTime = countdownTimeInSeconds;
   
}
function updateBreak(){
    let range=_('break-input');
    let displayRange=_('break-range');

    displayRange.textContent=range.value+"min";
    
    let result= Math.ceil(parseInt(range.value)/parseInt(range.value));
   
    return result;

    
}
function reset(){
    TIME.textContent=remainingTime;
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
   
    
    // console.log(`0${minutes}:${seconds}`);
    if(remainingTime===0){
        
        MESSAGE.textContent= "Time's Up";
        TIME.textContent=remainingTime;
        clearInterval(startTimer);     
         
        breakCount++;
        timeControl++;
        console.log("breakCount"+breakCount);

            if(breakCount>7){
                remainingTime=0;
                pause();
                reset();
            }
        
            _("display").textContent=breakCount;
            if(breakCount==7){
               remainingTime=3*60;
               setTimeout(breakTimer);
               MESSAGE.textContent=" ";
                STATUS.textContent = "Long Break!!";

            }
            else if(timeControl%2==0){
                setTimeout(start);
                remainingTime=countdownTimeInSeconds;
                MESSAGE.textContent=" ";
                STATUS.textContent = "Work";
                
            }  
            else {
                setTimeout(breakTimer);
                MESSAGE.textContent=" ";
                STATUS.textContent = "Break";
            }            
             
        // }
        
    }else{        
        TIME.textContent=`0${minutes}:${seconds}`;
        // console.log(remainingTime);
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
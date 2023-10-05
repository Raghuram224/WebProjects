


let countdownTimeInSeconds =30*60;

let breakCount=0;
let remainingTime = countdownTimeInSeconds;
let timer;
let timerStatus = false;
let dark_mode=0;
let timeControl=0;
let audio = new Audio('assetes/song.mp3');
const  TIME=_('time');
const MESSAGE=_('msg');
const STATUS=_('status');

TIME.textContent="30:00";
function _(id){
    return document.getElementById(id);
}

function breakTimer(){    

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

    let minutes=Math.floor(remainingTime/60);
    
    let seconds=remainingTime%60;

    if(minutes<=9){
        minutes="0"+minutes;
       
    }
    if(seconds<=9){
        seconds="0"+seconds;
    
    }
    TIME.textContent=`${minutes}:${seconds}`;

    return remainingTime;
}
function updateBreak(){
    let range=_('break-input');
    let displayRange=_('break-range');

    displayRange.textContent=range.value+"min";
    
    countdownTimeInSeconds = parseInt(range.value) * 60;
    remainingTime = countdownTimeInSeconds;
  
    return remainingTime;

    
}
function updateLongBreak(){
    let range=_('long-break-input');
    let displayRange=_('long-break-range');

    displayRange.textContent=range.value+"min";
    
    countdownTimeInSeconds = parseInt(range.value) * 60;
    remainingTime = countdownTimeInSeconds;
  
    return remainingTime;
}
function reset(){
    let time=updateTimer();
    let minutes=Math.floor(time/60);
    
    let seconds=time%60;
    if(minutes<=9){
        minutes="0"+minutes;
       
    }
    if(seconds<=9){
        seconds="0"+seconds;
    
    }
    
    TIME.textContent=`${minutes}:${seconds}`;
    pause();
    remainingTime=countdownTimeInSeconds;
    timerStatus=false;
    STATUS.textContent="Work";
    
}

function pause(){

    clearInterval(timer);
    timerStatus=false;
    
}
function startTimer(){
    let minutes=Math.floor(remainingTime/60);
    
    let seconds=remainingTime%60;
    if(minutes<=9){
        minutes="0"+minutes;
       
    }
    if(seconds<=9){
        seconds="0"+seconds;
    
    }

    if(remainingTime===0){
       
        MESSAGE.textContent= "Time's Up";
        TIME.textContent=`${remainingTime}:00`;
        clearInterval(startTimer);     
         
        breakCount++;
        timeControl++;
   

            if(breakCount>7){
                remainingTime=0;
                pause();
                reset();
                audio.pause();
            }
        
           
            if(breakCount==7){
               remainingTime=updateLongBreak();
               setTimeout(breakTimer);
               MESSAGE.textContent=" ";
                STATUS.textContent = "Long Break!!";
                audio.play();

            }
            else if(timeControl%2==0){
                countdownTimeInSeconds=updateTimer()*60;
                MESSAGE.textContent=" ";
                STATUS.textContent = "Work";
                start();
                
                audio.pause();
                
            }  
            else {
                remainingTime=updateBreak();
                setTimeout(breakTimer);
                MESSAGE.textContent=" ";
                STATUS.textContent = "Break";
               
                audio.play();
            }            
             
        
    }else{        
        TIME.textContent=`${minutes}:${seconds}`;  
        remainingTime-=1;
    }
 

}

function start(){
    
    if(!timerStatus){
      timer=setInterval(startTimer,1000);
    timerStatus = true;
    }
    
}
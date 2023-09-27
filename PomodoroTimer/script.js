const countdownTimeInSeconds = 5;
let remainingTime = countdownTimeInSeconds;



function startTimer(){
    const minutes=Math.floor(remainingTime/60);
    const seconds=remainingTime%60;

    console.log(`${minutes}:${seconds}`);
    if(remainingTime===0){
        
        MESSAGE.textContent= "Time's Up";
        TIME.textContent="00:00";
        clearInterval(startTimer);
        
    }else{        
        TIME.textContent=`${minutes}:${seconds}`;
        remainingTime--;
    }

}
function _(id){
    return document.getElementById(id);
}
// const TIMEINTERVEL=0;
const  TIME=_('time');
const MESSAGE=_('msg');


function start(){
    let timeStarts= setInterval(startTimer,1000);
    // TIME.textContent=timeStarts;
}
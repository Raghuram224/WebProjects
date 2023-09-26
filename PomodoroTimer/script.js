const countdownTimeInSeconds = 3600;
let remainingTime = countdownTimeInSeconds;

function timer(){
    const minutes=Math.floor(remainingTime/60);
    const seconds=remainingTime%60;

    console.log(`${minutes}:${seconds}`);
    if(remainingTime===0){
        console.log("times up")
        clearInterval(TIMEINTERVEL);
    }else{
        remainingTime--;
    }

}
const TIMEINTERVEL=setInterval(timer,1000);


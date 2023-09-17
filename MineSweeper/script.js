


let score=0;
const WRAPPER= _id('wrapper');
const DASHBOARD= _id('dashboard');
const SCORE_BOARD=_id('score');
let list=[]
let stop=true;
function _id(id){
    return document.getElementById(id);

}

function random(){
    let rand=Math.floor(Math.random() * (16 - 1 + 1)) + 1;
    return rand;
}

function disappear(element){
    
    
    if(!list.includes(element.id) && score<15){
        list.push(element.id);
        if(element.id !=`b${bombPosition}`){
            if(stop){
                element.innerHTML=`<img src="assets/coin.gif"class="bomb">`; 
                score++;
                SCORE_BOARD.textContent=score
                let coinAudio= new Audio('assets/coin.mp3');
                coinAudio.play();
                coinAudio.volume=0.3;
            }
            
    
        }
        else{
            stop=false;
            return loose(element);
            
            // console.log("click");
            
        }
        if(score==15){
            return dashboard(score);
        }       

    }
    
    
}

function dashboard(score){ //for winner
    if(score==15){
        DASHBOARD.innerHTML=`<a class="winner result">You Win</a>`;
        let win= new Audio('assets/win1.mp3');
        win.play();

    }
}

function loose(element){ //for loose    

    element.innerHTML=`<img src="assets/bomb.gif"class="bomb" >`;  
    let audio= new Audio('assets/bombsound.mp3');    
    
    setTimeout(() => {
        audio.play();   
    audio.volume=0.5;
        
    }, 900);
      
    start=true;
    return setTimeout(() => {       
    
        DASHBOARD.innerHTML=`<a class="runner result">GAME OVER</a>`;
        WRAPPER.style.display="none";
        let loose=new Audio('assets/loose.mp3');
        loose.play();
        
        }, 2000);
}



function main(){
    
    let string="";
    for(let i=1;i<=16;i++){
        string+=`<span class="box" id=b${i} onclick="disappear(this)"> <a class="num"> ${i}</a></span>`;
    }
    WRAPPER.innerHTML=string;
    
}

function init(){
   
    let start = new Audio('assets/start.mp3');
    start.play();
    stop=true;
    main();
    bombPosition = random();
    console.log(bombPosition) 

  
    WRAPPER.style.display="block flex";
    list=[];
    DASHBOARD.innerHTML=" ";
    score=0;
    
}


function _id(id){
    return document.getElementById(id);

}
function disappear(element){
    // console.log("element "+element.id);
    console.log(list);
    if(!list.includes(element.id) && score<15){
        list.push(element.id);
        if(element.id !=`b${bombPosition}`){
     
            element.innerHTML=`<img src="assets/coin.gif"class="bomb">`; 
            score++;
            SCORE_BOARD.textContent=score
            let coinAudio= new Audio('assets/coin.mp3');
            coinAudio.play();
            coinAudio.volume=0.3;
    
        }
        else{
           
            element.innerHTML=`<img src="assets/bomb.gif"class="bomb" >`;  
            let audio= new Audio('assets/bombsound.mp3');    
            
            setTimeout(() => {
                audio.play();   
            audio.volume=0.5;
                
            }, 900);
              
            
            return setTimeout(() => {
                
            
                DASHBOARD.innerHTML=`<a class="runner">Bomb Clicked</a>`;
                WRAPPER.style.display="none";
                let loose=new Audio('assets/loose.mp3');
                loose.play();
                
                }, 2000);
            
            // console.log("click");
            
        }
        if(score==15){
            return dashboard(score);
        }       

    }
    
    
}
let score=0;
const WRAPPER= _id('wrapper');
const DASHBOARD= _id('dashboard');
const SCORE_BOARD=_id('score');
let list=[]
function main(){
    let string="";
    for(let i=1;i<=16;i++){
        string+=`<span class="box" id=b${i} onclick="disappear(this)">${i}</span>`;
    }
    WRAPPER.innerHTML=string;
    
}
function random(){
    let rand=Math.floor(Math.random() * (16 - 1 + 1)) + 1;
    return rand;
}

function dashboard(score){
    if(score==15){
        DASHBOARD.innerHTML=`<a class="winner">You Win</a>`;
        let win= new Audio('assets/win.mp3');
        win.play();

    }
}
function init(){
    main();
     bombPosition = random();
     console.log(bombPosition);
     WRAPPER.style.display="block flex";
     list=[];
     DASHBOARD.innerHTML=" ";
     score=0;
    
}

const SECTION=document.getElementById("section");
let wrapper = document.getElementsByClassName('wrapper');
let n=20;
let color1;
let color2;
let gradient1;
let gradient2;
let boxCount=4;
let colors = [];
let idCount=1;

function randomColor(){
    let letters = "0123456789ABCDEF";
    let color="#";
    for(let i=0; i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;  
  }
  


function preLoadedData(n){
	let preBoxes="";
	for(let i=0;i<n;i++){
		preBoxes+=`
		<div class="box" id="likes"> 
            <div class="wrapper" id=b${idCount}>  
                <div class="gradient1 gradient" id="gradient1">
                    <p class="color"></p>
                </div>                
                <div class="gradient2 gradient"  id="gradient2"></div>          
            </div>
            
            <div class="emoji">
                <div class="likes">
                    <svg class="favrioute" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF0000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>            
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>            
                        <g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#fff"/> </g>            
                    </svg>    
                    <p class="count">0</p>
                </div>                
            </div>    
    
        </div>`;
        idCount++;
	}
    // console.log(colors);
	return preBoxes;

}




function init(n){
    let data=preLoadedData(n);
    SECTION.innerHTML= data;
    for(let i=0;i<wrapper.length;i++){
        let color1=randomColor();
        let color2=randomColor();
        colors.push({color1,color2});
        wrapper[i].style.backgroundImage = `linear-gradient(to right, ${color1} ,${color2}`;
    }
}
init(n);
  


function infinteScroll(ev){
	const BOTTOMSCROLL=SECTION.getBoundingClientRect().bottom;
	const WINDOWHEIGHT=window.innerHeight;
    // console.log(BOTTOMSCROLL,WINDOWHEIGHT);
    
	
	if(BOTTOMSCROLL-WINDOWHEIGHT<100){

		SECTION.innerHTML+=preLoadedData(boxCount);event.target
        // wrapper = document.getElementsByCl//n=n+boxCount;assName('wrapper');
        gradient1=document.getElementById("gradient1");
        gradient2=document.getElementById("gradient2");
      

    
		for(let i=n;i<wrapper.length;i++){
            
			color1=randomColor();
			color2=randomColor();
            colors.push({color1,color2});
			wrapper[i].style.backgroundImage = `linear-gradient(to right, ${color1} ,${color2}`;
            
            
            
		}
        n=n+boxCount;  
	}
    

	

}

window.addEventListener("scroll",infinteScroll);
window.addEventListener("mouseover",function(event){
    // console.log(event.target.id);
    let bgChanger=event.target.id;
    
    let colorIndx = event.target.parentElement.id.slice(1);
    // console.log(event.target.parentElement.id);
    // console.log(bgChanger,colorIndx)
    if(bgChanger == 'gradient2'){
        event.target.style.backgroundColor = colors[colorIndx-1].color2;
    }else{
        event.target.style.backgroundColor = colors[colorIndx-1].color1;
    }
    
    

});

window.addEventListener("mouseout",function(event){
        event.target.style.backgroundColor = "transparent";
        event.target.style.backgroundColor = "transparent";
    
});

// SECTION.addEventListener("click",function(ev){
//     console.log(ev.target.classList);
//     if(ev.target.classList.contains('gradient2')){
//         console.log(ev.target);
//         // ev.target.style.backgroundColor = ;
//     }
// })
// let like= document.getElementById("likes");
// like.addEventListener("click",likes);

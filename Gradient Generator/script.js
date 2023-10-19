
const SECTION=document.getElementById("section");

function randomColor(){
    let letters = "0123456789ABCDEF";
    let color="#";
    for(let i=0; i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
  
  }
  
  

function preLoadedData(){
	let preBoxes="";
	for(let i=0;i<20;i++){
		preBoxes+=`
		<div class="box"> 
            <div class="wrapper">  
                <div class="gradient1 gradient">
                    <p class="color"></p>
                </div>                
                <div class="gradient2 gradient"></div>          
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
	}
	return preBoxes;

}
let data=preLoadedData()

SECTION.innerHTML= data;


  
let wrapper = document.getElementsByClassName('wrapper');
for(let i=0;i<wrapper.length;i++){
	let color1=randomColor();
	let color2=randomColor();
	wrapper[i].style.backgroundImage = `linear-gradient(to right, ${color1} ,${color2}`;
}

  
    
function likes(){

}


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
let textColor1;
let textColor2;

let c1;
let c2;



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
                    <p class="color" id="color1"></p>
                </div>                
                <div class="gradient2 gradient"  id="gradient2">
                    <p class="color" id="color2"></p> 
                </div>   
                          
            </div>
            
            <div class="emoji">
                <div class="likes">
                    <svg class="favrioute" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF0000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>            
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>            
                        <g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#fff"/> </g>            
                    </svg>    
                    
                </div>   
                           
            </div>    
    
        </div>`;
        idCount++;
	}
   
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
  


function infinteScroll(){
	const BOTTOMSCROLL=SECTION.getBoundingClientRect().bottom;
	const WINDOWHEIGHT=window.innerHeight;
   
    
	
	if(BOTTOMSCROLL-WINDOWHEIGHT<100){

		SECTION.innerHTML+=preLoadedData(boxCount);
     
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


window.addEventListener("mouseover",function(event){
  
   
    let bgChanger=event.target.id;    
    let colorIndx = event.target.parentElement.id.slice(1);
    
    
    

    if(bgChanger === 'gradient1'){
        let opacityController=event.target.style.opacity="1";

        c2=event.target.querySelector("#color2");
        if(c2!==null){
            c2.style.opacity="0";
        }
        
        event.target.style.backgroundColor = colors[colorIndx-1].color1;
        event.target.querySelector("#color1").textContent=`${colors[colorIndx-1].color1}`;
        

    }else if((bgChanger === 'gradient2')) {
        let opacityController=event.target.style.opacity="1";
        
        c1=event.target.querySelector("#color1");
        if(c1!==null){
            c1.style.opacity="0";
        }
        
        event.target.style.backgroundColor = colors[colorIndx-1].color2;
        event.target.querySelector("#color2").textContent=`${colors[colorIndx-1].color2}`;

     
        
    }else{
        
    }
    
    
    

});

window.addEventListener("mouseout",function(event){
        event.target.style.backgroundColor = "transparent";
        event.target.style.backgroundColor = "transparent";

        c1=event.target.querySelector("#color1");
        c2=event.target.querySelector("#color2");    

        // c2.style.opacity="0";
        // c1.style.opacity="0";
 // console.log(colors);
    
});

window.addEventListener("click",function(event){
    // console.log(event.target.parentElement.nodeName);
    if(event.target.style.fill=="rgb(255, 49, 65)"){
        event.target.style.fill="#FFF";
    }else{
        event.target.style.fill="#FF3141";
    }
    
    // console.log(event.target.style.fill);
    

});


function monoColor(){
    let gradient2=document.getElementsByClassName("gradient2");
    console.log(gradient2);
    gradient2[0].classList.add("monoColorGradient2");


}


window.addEventListener("scroll",infinteScroll);
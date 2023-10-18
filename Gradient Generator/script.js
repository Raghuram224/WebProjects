function randomColor(){
    let letters = "0123456789ABCDEF";
    color="#";
    for(let i=0; i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
  
  }
  
  

  
  let wrapper = document.getElementsByClassName('wrapper');
  wrapper[0].style.backgroundImage = `linear-gradient(to right, ${randomColor()} ,${randomColor()}`;
  wrapper[1].style.backgroundImage = `linear-gradient(to right, ${randomColor()} ,${randomColor()}`;
  
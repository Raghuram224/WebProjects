

function _(id){
    return document.getElementById(id);
 } 
 
 function anyBase(num,base=2){
     if(num==0){
         return "0";
     }
     else if(base!=16){
         let str="";
         while(num>0){
             str=(num%base)+str;
             num=parseInt(num/base);
     
         }
         return str;
     }
     else{
    
         let str="";
         const hexChars="0123456789ABCDEF";
         while(num>0){          
             str=(hexChars[(num%base)])+str;
             num=parseInt(num/base);
     
         }
         return str;
     }
    
 
 }
 

 
 function anyBaseToDecimal(binary,base=2){
    let sum=0
	const hexa={'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15};
    
	for(let i=binary.length-1, j=0;i>=0;i--,j++){
		let value=hexa[binary[i]];
		sum+=(parseInt(value)*Math.pow(base,j))
	}

    return sum;
 }
 
 
 

 
 function main(){
     let inp=_('input-box');
     let drpdown1=_('box-one');
     let drpdown2=_('box-two');
     let display=_('display');
     let output="";
     let result="";
 
     try {
         if(drpdown1.value==drpdown2.value){
             display.textContent="Both are same!";
         }
         //binary to
         else if(drpdown1.value=="binary" && drpdown2.value=="decimal"){
			output=
             output=anyBaseToDecimal(inp.value);
             display.textContent=output;
 
         }else if(drpdown1.value=="binary" && drpdown2.value=="octal"){
             output=anyBaseToDecimal(inp.value);
             result=anyBase(output,8);
             display.textContent=result;
 
         }else if(drpdown1.value=="binary" && drpdown2.value=="hexa"){
             output=anyBaseToDecimal(inp.value);         
             result=anyBase(output,16);        
             display.textContent=result;
           
             //Decimal to 
         }else if(drpdown1.value=="decimal" && drpdown2.value=="binary"){
             output=anyBase(inp.value);
             display.textContent=output;
 
         }else if(drpdown1.value=="decimal" && drpdown2.value=="octal"){
             output=anyBase(inp.value,8);
             display.textContent=output;
 
         }else if(drpdown1.value=="decimal" && drpdown2.value=="hexa"){
             output=anyBase(inp.value,16);
             display.textContent=output;
             
         }// Octal to
         else if(drpdown1.value=="octal" && drpdown2.value=="binary"){        
             output=anyBaseToDecimal(inp.value,8);
             result=anyBase(output);
             display.textContent=result;
 
         } else if(drpdown1.value=="octal" && drpdown2.value=="decimal"){            
             result=anyBaseToDecimal(inp.value,8);            
             display.textContent=result;
         }
         else if(drpdown1.value=="octal" && drpdown2.value=="hexa"){            
             output=anyBaseToDecimal(inp.value,8);             
             result=anyBase(output,16);
             display.textContent=result;
 
         }//Hexadecimal to
         else if(drpdown1.value=="hexa" && drpdown2.value=="binary"){
			output=anyBaseToDecimal(inp.value,16);
			result=anyBase(output);
			display.textContent=result;
 
         }else if(drpdown1.value=="hexa" && drpdown2.value=="decimal"){
			result=anyBaseToDecimal(inp.value,16);			
			display.textContent=result;
 
         }else if(drpdown1.value=="hexa" && drpdown2.value=="octal"){
			output=anyBaseToDecimal(inp.value,16);
			result=anyBase(output,8);
			display.textContent=result;
 
         }
 
         else{
             console.log("Give valid inputs!");
         }
         
     } catch (err) {
         console.log(err);
         display.textContent="Give valid Inputs!!";
         
     }
     
  
 }
 
 
 
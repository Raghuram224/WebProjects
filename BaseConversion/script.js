

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
 
 // console.log(anyBase(5,2));
 
 function anyBaseToDecimal(binary,base=2){
     let sum=0
     for(let i=binary.length-1, j=0;i>=0;i--,j++){
       sum+=(parseInt(binary[i])*Math.pow(base,j))
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
             console.log(output);
             result=anyBase(output,16);
             display.textContent=result;
 
         }//Hexadecimal to
         else if(drpdown1.value="hexa" && drpdown2.value=="binary"){
 
         }
 
         else{
             console.log("Give valid inputs!");
         }
         
     } catch (err) {
         console.log(err);
         display.textContent="Give valid Inputs!!";
         
     }
     
     // console.log(BOX_ONE);  
     
 }
 
 
 
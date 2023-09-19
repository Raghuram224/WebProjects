function _(id){
   return document.getElementById(id);
}

function clearInput(){
   let input=_('input');
   input.te
}


function init(){
    console.log("init");
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
        binaryString
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

function binaryToDecimal(binary){
    let sum=0
    for(let i=binary.length-1, j=0;i>=0;i--,j++){
      sum+=(parseInt(binary[i])*Math.pow(2,j))
    }
    return sum;
}

console.log(binaryToDecimal("1010"));
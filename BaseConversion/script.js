

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

// const INPUT=_('input');
const BOX_ONE=_('box-one');
function boxOne(option){
    let drpdown1 = val;
    let drpdown2 = val;

    if(drpdown1 == decimal && drpdown2 == binary){

    }else if(dp == decimal &&bdp2 == octal)0

}


function main(){
    // console.log(BOX_ONE);  
    console.log("clicked");
}


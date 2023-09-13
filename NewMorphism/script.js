const CHAR = document.getElementById("char");
const WORD = document.getElementById("word");
const TEXTAREA = document.getElementById("textarea");
const SENTENCE=document.getElementById("sentence");
const PARAGRAPH=document.getElementById("paragraph");
// let length=TEXTAREA.value.length;

function wordCount(){
    let count=0;    
    let value=TEXTAREA.value;
    for(let i=0;i<value.length;i++){
        if(value.charAt(i)==" " && value.charAt(i+1)!=" " && value.charAt(i+1)){
            count++;
        }
    }
    return count;
    
}
function sentence(){
    let value=TEXTAREA.value;
    let sentenceCount=0;
    for(let i=0;i<value.length;i++){
        if(value.charAt(i)=='.'){
            sentenceCount++;
        }
    }
    return sentenceCount;


}
function paragraph(){
    let value=TEXTAREA.value;
    let paragraphCount=0;
    let isNewParagaraph;
    for(let i=0;i<value.length;i++){
        if(value[i]==='\n'){
            isNewParagaraph=true;
        }else if(isNewParagaraph){
            paragraphCount++;
            isNewParagaraph=false;
        }
    }
    return paragraphCount;
}
function main() {    
    CHAR.textContent=TEXTAREA.value.length;
    WORD.textContent=wordCount();
    SENTENCE.textContent=sentence();
    PARAGRAPH.textContent=paragraph();
}

const input = document.getElementById("index");
const check = document.getElementById("Check");


function reverseString(str){
    return str.split("").reverse().join("")
}

check.addEventListener("click",function check(){
    const value=input.value
    const reverse = reverseString(value)
    
    if(value === reverse){
        alert("P A L I N D R O M E");
    }else{
        alert("NOT P A L I N D R O M E");
    }

    input.value="";
    
});
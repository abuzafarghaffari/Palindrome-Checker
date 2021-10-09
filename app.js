var input = document.querySelector("#inputs");
let result = document.getElementById("result");
const button = document.querySelector("button");
var inputValue;

function getInput(){
    inputValue = input.value;
    //console.log(inputValue);
  
      
}
function palindrome(){
    inputValue = inputValue.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reverse = inputValue.split("").reverse().join("");
    console.log(inputValue);

    if(inputValue === reverse){
       return result.innerHTML ="yes";
      }
        else{
           return result.innerHTML="No";
        }
      
}


//console.log(reverse);
/*
function palindrome() {
    //const input = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    console.log(reverse);
    if(input === reverse){
      return result.innerHTML ="yes";
    }
      else{
        return  result.innerHTML="No";
      }
    }
    
    button.addEventListener("click",palindrome)
    */
  // palindrome(input);

/*
function printmeesage(username,password){
    console.log("username and password ");
    console.log(` ${username} and ${password}`);
}
printmeesage("mohammed","1234");


function addtwonumbers(x,y){ // creat a function and passing parameters
    let total = x * y;
    console.log(`total : ${total}`);
    
}
addtwonumbers(20,5); // calling the function



//local and global variable
let x = 12;  // global var
function one(){
    let x = 10; // local var
}
function two(){
    let x = 15; 
}
*/


const textbox = document.getElementById("textbox");
const tof = document.getElementById("tof");
const toc = document.getElementById("toc");
const result = document.getElementById("result");

let temp;
function convert(){
    if(tof.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"  //alt + 0176
    }
    else if(toc.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent("Select a unit");
    }
}
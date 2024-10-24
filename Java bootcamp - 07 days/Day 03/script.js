const submit = document.getElementById("submit");

// const mycheckbox = document.getElementById("mycheckbox");
// const live = document.getElementById("live");
// const recording = document.getElementById("recording");


// function sub() {
//     if(mycheckbox.checked){
//     subresult.textContent='you are subscribed';
// }
//     else{
//         subresult.textContent='you are not subscribed';
//     }

//     if(live.checked){
//         attendmethod.textContent='live class attended'
//     }
//     else if(recording.checked){
//         attendmethod.textContent='recording'
//     }
//     else {
//         attendmethod.textContent='nothing'
//     }
// }



/*
// string methods -> allows you manipulate and work withtext(string)
let username = "developers stack academy"
let password = "94-112-578-45"
let pad = "4750358240"
submit.onclick= function() {
    // will check one by one
    subresult.textContent=username.charAt(0); 
    subresult.textContent=username.indexOf("e");
    subresult.textContent=username.lastIndexOf("e");
    subresult.textContent=username.length;
    subresult.textContent=username.trim();
    subresult.textContent=username.toUpperCase();
    subresult.textContent=username.charAt(0);
    subresult.textContent=username.repeat(3);
    subresult.textContent=username.startsWith("d");
    subresult.textContent=username.endsWith("e");

    subresult.textContent=password.replaceAll("-","");//replace space into text,anything
    subresult.textContent=pad.padStart(15,"0");
}*/


/*
// string slicing
let fullname = "mohammed musammil";
submit.onclick= function() {
    subresult.textContent=fullname.slice(0,4); // cut the text 0 to 4
    subresult.textContent=fullname.slice(0,fullname.indexOf(" "));  // print the first name
}*/



/*
// method chaining
// no method chaining
let username = window.prompt("enter your user name");
username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraleters = username.slice(1);
extraleters = extraleters.toLowerCase();
subresult.textContent = letter+extraLetters;  


// with method trainning
subresult.textContent = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
submit.onclick = function(){
    subresult.textContent = letter+extraLetters;
}*/





/*
//logical operators and(&&) or(||) not !
let x = 50;
let y= 20;
submit.onclick = function(){
    if(x>60 || y<30){
        subresult.textContent = 'final output is true';
    }
    else{
        subresult.textContent = 'final output is failed';
    }
}   */



/*
// asssignment operator
const no = 50;
submit.onclick = function(){
    if(no != "50"){
        subresult.textContent = "true";
        }
        else{
            subresult.textContent = "false";
        }
}  */


/*
//while , for loop
let x = 0;
while(x<10){
    console.log(x);
    x++;
}

for(let i=0; i<10; i++){
    console.log(i);
}
submit.onclick = function(){

}    */




// number guessing game
const min = 1;
const max = 100;

const num =Math.floor(Math.random() * (max - min + 1) ) + min;

let attempt = 0;
let guess;
let running = true;

while(running){
   
    //get user input
    guess = window.prompt('guess a num between  ${min} - ${max}');
    guess = Number(guess);
    console.log(guess,typeof guess);
    

    //not as a number
    if(isNaN(guess)){
        window.alert("please enter valid number !");
    }
    else if(guess < min || guess >max){
        window.alert("please enter valid number !");
    }
    else{
        attempt++;
        if(guess < num){
            window.alert("too low! try again");
        }
        else if (guess >num){
            window.alert("too high! try again");
        }
        else{
            window.alert("correct!");
            running=false;
        }
    }

    
}
 


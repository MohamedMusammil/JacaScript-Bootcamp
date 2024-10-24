console.log("welcome to java script"); // this is the display comment
//window.alert('Hello');

// variables   (let - this is a kind of variable name)
let x=15;
let y=10.25;
let z = "musammil";  // string value

console.log(x);    // output: 15
console.log(y);     //output: 10.25
console.log(z);      // output : musammil

console.log(typeof x);    // output: number
console.log(typeof y);     //output: number
console.log(typeof z);      // output : string


// user input  (prompt)
//let username =prompt("enter ur name :");
//console.log(username);


let r ;
document.getElementById("submit").onclick= 
function(){
    r=document.getElementById("txt").value;

   /* let username=document.getElementById("txt").value
    console.log(username);*/

//type conversion
 /*  age = Number(age);  
   age = age + 1;*/


    // constant (cant change the const value  after initializing )
  /*const pi = 3.15;
   console.log(pi);
    r = Number(r);
   let circumference = 2 * pi * r;
   document.getElementById("name").textContent='${circumference}';*/

    //math function 
   /* r = Number(r);
    r= Math.round(r);
    r = Math.sqrt(100);
    r=Math.sin(45);
    r=Math.max(25,20,35,15); //find the maximum value
    document.getElementById("name").textContent='${r}';*/


    //random Number generator
    /*r = Math.random() *20;
    console.log(r);*/

    // if condition
    /*if(age >= 18){
       let stat =  "Adult";
    }
    else{
        let stat ="Teenager"
    }
    document.getElementById("name").textContent='${status}';
   // console.log(stat);*/


   // ternary operators
   //let status = r>=18 ? "you r adult" : "you r minor";


    //switch
    let status;
    
    switch(r){
        case "nilani":
            status = "choco";
            break;

        case "keerthika":
            status = "teddy";
            break;

        case "swathi":
           status = "doll";
           break;

        default:
            status = "no gift";

    }
    document.getElementById("name").textContent='${status}';

}
   






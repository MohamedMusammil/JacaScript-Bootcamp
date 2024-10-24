let car = ["honda","audi","benz","tata","RR"];  //create an array
console.log(car[2]);
console.log(car[0]);

car.push("bmw");   //add element to the end of the array
console.log(car);

car.pop;          //remove last element from the array
console.log(car);

car.unshift("toyota");//add element at the beginning of the array
console.log(car);

car.shift();       //removes first element from the array
console.log(car);

console.log(car.length); //get the  length of the array

console.log(car.indexOf("tata"));//print the index of array element

for(let i=0; i<=car.length; i++){
    console.log(car[i]); //print the element one by one
}

console.log(car.sort());     //sorts the elements in alphabetical order
console.log(car.sort().reverse());     

//SPREAD OPERATORS
let numbers = [1,20,3,4,5,6];
// let max = 0;
// for(let i=0; i<=numbers.length; i++){
//     if(max < numbers[i]){
//         max = numbers[i];
//     }
// }

let max = Math.max( ...numbers ); //find the maximum
let min = Math.min( ...numbers); // find minimum value
console.log(max);


let fruits = ["apple","orange","banana"];
let veg = ["celery","potatos","carrots"];

let foods= [...fruits, ...veg,"milk" ];   
console.log(foods);

//rest operators
function printarr( ...elements){ //getting all elements in bundel format
    console.log(elements);
}

const name1 = "shawn";
const name2 = "shawn";
const name3 = "aysha";
const name4 = "musammil";
const name5 = "mohamed";
printarr(name1,name2,name3,name4);



//find the total no
function sum( ...numbers){ // getting the numbers  and adding them upreturn numbers.reduce((a,b)=> a+b ,0) ;  
    let total = 0;
    
    for(let num of numbers){
        total = total + num;
    }
    return total;
}

console.log(sum(2,52,45,75,10,7));


// call back
function hello(callback){
    setTimeout(function(){  //time delay to the print
        console.log("Hello");
    },3000);// set the delay time
    callback(); //method 
}
function print(){
    console.log("World");
}
hello(print);  //nested function

/*
// Foreach() ->getting each and every element in array display
//elements , index , array
let numbers = [1,2,3,4,5,6,7,8];
let fruits = ["apple","banana","orange","mango"];

fruits.forEach(touppercase);
numbers.forEach(double);
numbers.forEach(cube);
numbers.forEach(display);

function touppercase(element  , index , array){
    array[index] =element.touppercase;
}


function double(element  , index , array){
    array[index] = element * 2;
}

function cube(element  , index , array){
    array[index] = Math.pow(element,3);
}

function display(element){
    console.log(element);
}
*/


//Map() - >accepts a callback and applies that function to each element of an array,then return a new value

const number = [1,2,3,4,5,6];
const newarray = number.map(square);

console.log(newarray);

function square(element){
    return Math.pow(element,2);
}

// map used in string
const languages = ["php","java","python","ja"];
const newarr = languages.map(uppercase);

console.log(newarr);

function uppercase(element){
    return element.toUpperCase();
}

//map used in date and replace the dash into forward slash
const dates = ["2024-01-18","2024-02-28","2025-04-01"];

const formatdates = dates.map(formatdate);

console.log(formatdates);
function formatdate(element){
    const parts = element.split("-");//2024,01,18
    return `${parts[1]}/${parts[2]}/${parts[3]}`
}

//.filter() -> creates a new array by filtering out elements
let numbers = [1,2,3,4,5,6,7,8,9];

let evennumbers = number.filter(isEven);
console.log(evennumbers);

function isEven(element){
    return element % 2 == 0
}



// .reduce = reduce the elements of an array to a single value
const marks = [35,68,90,100,36,78];

const total = marks.reduce(sum);
console.log(total);

function sum(accumalator , element){
    return accumalator + element
}
/**
 * 
 * FUNCTIONS
 * 
 */

//Function tanımlama
//1 - 
//Parametresiz metot
function getDate(){
    console.log(new Date());
}

getDate();


const getDate2 = function(date){
    console.log(date);
}
function getDate3(date){
    console.log(date);
}
let date = new Date(2021,9,17,12,53,14,125);
getDate2(date);
getDate3(date);

let date2 = date.toDateString();

const getDate4 = (date) => {
    console.log(date);
}
getDate4(date2);

const welcome = () => {
    console.log("Hoşgeldiniz...");
}

welcome();

let number1 = 17;
let number2 = 13;
let total = 0;

const calculate = function(a,b){
    return a + b;
}
total = calculate(number1,number2);
console.log("Total : " + total);
total = calculate(5,4);
console.log(total);


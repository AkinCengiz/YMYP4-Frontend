let numbers = [1,3,5,8,12,17,18,26,33];


//FOR OF => Dizinin indexindeki değeri döndürür
for(let number of numbers){
    console.log(number);
}

//FOR IN => Dizinin index değerini ya da objenin property değerini döndürür

for(let number in numbers){
    console.log(number,numbers[number]);
}
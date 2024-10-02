const number = 5;

const init = () => {
    console.log("Faktoriyel Hesaplama");
    console.log("Örnek olarak 5 faktöryelin sonucunu hesaplayalım.");
    console.log("Kullanımı : result = factorial(5);")
    console.log("5! = ",factorial(number));
}

const factorial = (number) => {
    if(number === 1){
        return 1;
    }
    return number * factorial(number - 1); // 5 * 4 * 3 * 2 * 1
}

export { factorial, number };
export default init;
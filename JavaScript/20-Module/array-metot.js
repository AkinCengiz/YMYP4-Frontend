
//0 ile parametre olarak verdiğimiz değer arasında rastgele bir sayı üretiyoruz.
const randomNumber = (number) => {
    return Math.floor(Math.random() * number) + 1;
}

//Parametre olarak verilen diziyi küçükten büyüğe sıralıyoruz.
const sortAsc = (array) => {
    return array.sort((a,b)=>{
        return a - b;
    });
}

//Parametre olarak verilen diziyi küçükten büyüğe sıralıyoruz.
const sortDesc = (array) => {
    return array.sort((a,b) => {
        return b - a;
    })
}


export { randomNumber, sortAsc, sortDesc};

// const cities = ["İzmir","Ankara","Çanakkale"];
// console.log(cities.sort());
// console.log(sortAsc(cities));
// [1,3,5,12,13,25,56] => 1,12,13,25,3,5,56
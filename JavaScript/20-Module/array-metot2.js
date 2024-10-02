
//0 ile parametre olarak verdiğimiz değer arasında rastgele bir sayı üretiyoruz.
const createNumber = (number) => {
    return Math.floor(Math.random() * number) + 1;
}

//Parametre olarak verilen diziyi küçükten büyüğe sıralıyoruz.
const sortASC = (array) => {
    return array.sort((a,b)=>{
        return a - b;
    });
}

//Parametre olarak verilen diziyi küçükten büyüğe sıralıyoruz.
const sortDESC = (array) => {
    return array.sort((a,b) => {
        return b - a;
    })
}


export { createNumber, sortASC, sortDESC};

// const cities = ["İzmir","Ankara","Çanakkale"];
// console.log(cities.sort());
// console.log(sortAsc(cities));
// [1,3,5,12,13,25,56] => 1,12,13,25,3,5,56
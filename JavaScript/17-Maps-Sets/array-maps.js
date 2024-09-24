//Array den map oluşturma
const cities = [["06","Ankara"],["34","İstanbul"],["35","İzmir"],["54","Sakarya"],["08","Artvin"]];

const cityMap = new Map(cities);

console.log(cityMap);

//Map nesnesinden array oluşturma
const mapCities = new Map();
mapCities.set("06","Ankara");
mapCities.set("26","Eskişehir"),
mapCities.set("07","Antalya");
mapCities.set("41","Kocaeli");


console.log(mapCities);

const cityArr = Array.from(mapCities);
console.log(cityArr);

const personalInfo = {
    firstName : "Akın",
    lastname : "Cengiz",
    identityNumber : "12345678901",
    Address : {
        City : "İstanbul",
        Town : "Eyüp",
        District : "Göktürk"
    },
    Langs : ["CSharp",""],
    contact : {
        phone : "12345677",
    }
}

const pElement = document.createElement("p");
pElement.innerText = personalInfo.firstName;
const divElement = document.getElementById("info");
divElement.appendChild(pElement);
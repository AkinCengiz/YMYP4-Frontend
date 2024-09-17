let cities = ["İstanbul","İzmir","Ankara","Sakarya","Erzurum","Sivas"];

for(let i = 0; i < cities.length; i++){
    console.log("Cities[" + i + "] : " + cities[i]);
}

cities.forEach((city,index) => {
    console.log("City[" + index + "] : " + city);
});

cities.forEach(function(city,index){
    console.log("City2[" + index + "] : " + city);
});

cities.forEach((city) => {
    console.log(city);
});

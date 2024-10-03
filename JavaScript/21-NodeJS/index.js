// var express = require('express');
// console.log("NodeJS ve Npm Paketleri");
// console.log("Deneme1dfdfdsfds");
// //express();

var express = require("express");
const products = [
    {name:"Bilgisayar",price : 15000, stock : 12},
    {name : "Cep Telefonu",price : 12000, stock : 17},
    {name : "Ultra HD TV",price : 17000, stock : 5}
];
const categories = [
    {id : 1, name : "Bilgisayar"},
    {id : 2, name : "Cep Telefonu"},
    {id : 3, name : "Televizyon"},
    {id : 4, name : "Küçük Ev Aletleri"}
];
const app = express();
const port = 8080;
//GET 
app.get("/products",(request,response) => {
    response.json(products);
});
app.get("/categories",(request,response) => {
    response.json(categories);
});
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});

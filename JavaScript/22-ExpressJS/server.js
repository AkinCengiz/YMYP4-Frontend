const express = require("express");
const accessControl = require("./middleware");
const routers = require("./routers");
const app = express();

const port = 5000;

const users = [
    { id : 1, firstname : "Abdullah", lastname : "Aksu"},
    { id : 2, firstname : "Fırat", lastname : "Kılıç"},
    { id : 3, firstname : "Hidayet", lastname : "Alperen"},
    { id : 4, firstname : "Menderes", lastname : "Duman"},
    { id : 5, firstname : "Mihriban", lastname : "Şimşek"},
    { id : 6, firstname : "Murat", lastname : "Karakaya"},
    { id : 7, firstname : "Yekta", lastname : "Pektaş"}
];


app.use(accessControl);

app.use(express.json());
app.use("/api",routers);

//Get Request
//api/products/:categoryId
app.get("/users",(req,res) => {
    res.json(users);
});

//Post Request
app.post("/users",(req,res) => {
    users.push(req.body);
    res.json(users);
});

//PUT Request
app.put("/users/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            users[i] = {
                ...users[i],
                ...req.body
            };
        };
    }
    res.json(users);
});
// const numbers = [1,2,3,4];
// const {firstname,lastname} = users;
// const [a,b] = numbers;


//DELETE Request
app.delete("/users/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i,1);
        }
    }
    res.json(users);
});

app.listen(5000, () => {
    console.log("Uygulama başlatıldı. Port : " + port);
});
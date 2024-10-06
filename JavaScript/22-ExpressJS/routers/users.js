const express = require("express");
const app = express();
app.use(express.json());

const router = express.Router();
const users = [
    { id : 1, firstname : "Abdullah", lastname : "Aksu"},
    { id : 2, firstname : "Fırat", lastname : "Kılıç"},
    { id : 3, firstname : "Hidayet", lastname : "Alperen"},
    { id : 4, firstname : "Menderes", lastname : "Duman"},
    { id : 5, firstname : "Mihriban", lastname : "Şimşek"},
    { id : 6, firstname : "Murat", lastname : "Karakaya"},
    { id : 7, firstname : "Yekta", lastname : "Pektaş"}
];



// router.get("/",(req,res) => {
//     res.send("Kullanıcılar Sayfası");
// });

router.get("/:id",(req,res) => {
    res.send("İd ile gelen kullanıcı");
});
//localhost:5000/api/users
//Get Request
//api/products/:categoryId
router.get("/",(req,res) => {
    res.status(200).json(users);
});

//Post Request
//localhost:5000/api/users
router.post("/",(req,res) => {
    users.push(req.body);
    res.json(users);
});

//localhost:5000/api/users

//PUT Request
//localhost:5000/api/users/5
router.put("/:id",(req,res) => {
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
//localhost:5000/api/users/3
router.delete("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i,1);
        }
    }
    res.json(users);
});

module.exports = router;
const express = require("express");

const router = express.Router();

const products = [
    {
        "id": 5,
        "supplierId": 2,
        "categoryId": 2,
        "quantityPerUnit": "36 boxes",
        "unitPrice": 21.35,
        "unitsInStock": 0,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Chef Anton's Gumbo Mix"
    },
    {
        "id": 6,
        "supplierId": 3,
        "categoryId": 2,
        "quantityPerUnit": "12 - 8 oz jars",
        "unitPrice": 25,
        "unitsInStock": 120,
        "unitsOnOrder": 0,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Grandma's Boysenberry Spread"
    },
    {
        "id": 7,
        "supplierId": 3,
        "categoryId": 7,
        "quantityPerUnit": "12 - 1 lb pkgs.",
        "unitPrice": 30,
        "unitsInStock": 15,
        "unitsOnOrder": 0,
        "reorderLevel": 10,
        "discontinued": false,
        "name": "Uncle Bob's Organic Dried Pears"
    },
    {
        "id": 8,
        "supplierId": 3,
        "categoryId": 2,
        "quantityPerUnit": "12 - 12 oz jars",
        "unitPrice": 40,
        "unitsInStock": 6,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Northwoods Cranberry Sauce"
    },
    {
        "id": 9,
        "supplierId": 4,
        "categoryId": 6,
        "quantityPerUnit": "18 - 500 g pkgs.",
        "unitPrice": 97,
        "unitsInStock": 29,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Mishi Kobe Niku"
    }
]

//localhost:5000/api/products
router.get("/",(req,res) => {
    res.json(products);
});

router.post("/",(req,res) => {
    products.push(req.body);
    res.json(products);
});

router.put("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products[i] = {
                ...products[i],
                ...req.body
            };
        }
    }
    res.json(products);
});

router.delete("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products.splice(i,1);
        }
    }
    res.json(products);
})

module.exports = router;
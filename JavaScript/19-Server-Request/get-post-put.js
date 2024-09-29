//HTTP METHODS
/*
GET => Bir kaynaktan veri çekileceği zaman kullanılır. FETCH işlemlerinde varsayılan metodtur.
POST => Bir kaynak üzerine veri eklemek (Create) işlemleri yapmak için kullanılan methodtur.
PUT => Bir kaynak üzerindeki veriyi güncelleme (Update) işlemleri yapmak için kullanılan methodtur.
DELETE => Bir veri kaynağından veriyi silmek için kullanılır. (Delete)
*/

//https://northwind.vercel.app/api/categories
//https://northwind.vercel.app/api/customers
//https://northwind.vercel.app/api/products
//https://jsonplaceholder.typicode.com/

// fetch("https://northwind.vercel.app/api/customers")
// .then(response => response.json())
// .then(data => console.log(data));

//GET METODU
function get(url){
    fetch(url).then(answer => answer.json()).then(item => console.log(item));
}

// get("https://northwind.vercel.app/api/categories");
// get("https://northwind.vercel.app/api/products");


//GET METODU PROMISE YAPISI İLE OLUŞTURMA
function getPromise(url){
    return new Promise((resolve,reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
}

//console.log(getPromise("https://northwind.vercel.app/api/categories"));
// getPromise("https://northwind.vercel.app/api/categorie")
// .then(data => {console.log("***********************");console.log(data)})
// .catch(e => console.log(e));

//https://northwind.vercel.app/api/categories


//Get Metodu ile veri kaynağından veri çekiyoruz.
function getRequest(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
    });    
}
//console.log(getRequest("https://northwind.vercel.app/api/categories"));
// getRequest("https://northwind.vercel.app/api/categories")
// .then(data => console.log(data))
// .catch(err => console.error(err));


//POST Metodu ile veri kaynağına veri ekleme işlemi
function postRequest(url,data){
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method : "POST",
            body : JSON.stringify(data),
            headers : {"Content-type":"application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })    
}

//PUT Metodu ile veri kaynağındaki bir veriyi güncelliyoruz

function putRequest(url,data){
    return new Promise((resolve,reject) => {
        fetch(url,{
            method : "PUT",
            body : JSON.stringify(data),
            headers : { "Content-type" : "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
}

//DELETE metodu ile veri kaynağında bulunan bir veriyi sileriz.
function deleteRequest(url){
    return new Promise((resolve,reject) => {
        fetch(url,{method : "DELETE"})
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
    
}

//console.log(postRequest("https://northwind.vercel.app/api/categories",{name:"YMYP4",description:"İstanbul Eğitim Akademi"}))
// postRequest("https://northwind.vercel.app/api/categories",{name:"Post İşlemi",description:"İstanbul Eğitim Akademi"})
// .then(data => console.log(data))
// .catch(err => console.error(err));

//Asenkron => async (Metodun başına yazarak asenkron olmasını sağlarız). await (Asenkron yapıdaki metodlardaa çalışır ve işlemi yapmak için belirtilen işlemin tamamlanmasını bekler).

// putRequest("https://northwind.vercel.app/api/categories/2",{
//     "description": "İstanbul Eğitim Akademi",
//     "name": "YMYP4"});

// putRequest("https://northwind.vercel.app/api/products/76",{
//     "supplierId": 23,
//     "categoryId": 1,
//     "quantityPerUnit": "İstanbul Eğitim Akademi",
//     "unitPrice": 18,
//     "unitsInStock": 57,
//     "unitsOnOrder": 0,
//     "reorderLevel": 20,
//     "discontinued": false,
//     "name": "YMYP - JavaScript"
// })
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

deleteRequest("https://northwind.vercel.app/api/products/76")
.then(data => console.log(data))
.catch(err => console.error(err));
getRequest("https://jsonplaceholder.typicode.com/albums/101")
.then(data => console.log(data))
.catch(err => console.error(err));
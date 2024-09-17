fetch("./user.json")
.then(response => response.json())
.then(data => console.log(data));

fetch("https://northwind.vercel.app/api/products")
.then(response => response.json())
.then(data => console.log(data));

fetch("https://northwind.vercel.app/api/categories").then(response => response.json()).then(data => console.log(data));

fetch("https://northwind.vercel.app/api/orders").then(response => response.json()).then(data => console.log(data));
fetch("https://northwind.vercel.app/api/suppliers").then(response => response.json()).then(data => console.log(data));


fetch("./user.json")
.then(response => response.json())
.then(data => console.log(data));

fetch("https://northwind.vercel.app/api/products")
.then(response => response.json())
.then(data => console.log(data));

fetch("https://northwind.vercel.app/api/categories").then(response => response.json()).then(data => console.log(data));

fetch("https://northwind.vercel.app/api/orders").then(response => response.json()).then(data => console.log(data));
fetch("https://northwind.vercel.app/api/suppliers").then(response => response.json()).then(data => console.log(data));

let categories = fetch("https://northwind.vercel.app/api/categories").then(response => response.json());

fetch("https://northwind.vercel.app/api/products").then(response => response.json()).then(data => {
     const postlist = document.querySelector("#post-list");
     data.forEach(post => {
        const liElement = document.createElement("li");
        liElement.textContent = `${post.name} ${post.categories}`;
        postlist.appendChild(liElement);
     });
    });







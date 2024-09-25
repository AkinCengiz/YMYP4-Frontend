function Product(name,price,stock,category){
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
}

Product.prototype.getProduct = function(){
    console.log("Product Name : " + this.name + "\nPrice : " + this.price + "\nStock : " + this.stock + "\nCategory : " + this.category);
}

const product = new Product("Samsung S24",30000,13,"Cep Telefonu");
product.getProduct();

const productTitle = document.getElementById("product");
const price = document.getElementById("price");
const category = document.getElementById("category");
const stock = document.getElementById("stock");
productTitle.textContent = product.name;
price.textContent = product.price;
category.textContent = product.category;
stock.textContent = product.stock;

console.log(productTitle)

/*
<div id="item" class="card" style="width: 18rem">
        <div id="card-body" class="card-body">
          <h5 id="product" class="card-title">Card title</h5>
          <p id="category" class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p id="price" class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a id="stock" href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>


*/

fetch("https://northwind.vercel.app/api/products").then(response => response.json()).then(data => {
    const productList = document.getElementById("product-list");
    
    // data.forEach(product => {
    //     const detail = ` 
    //     <div id="item" class="card" style="width: 18rem">
    //     <div id="card-body" class="card-body">
    //       <h5 id="product" class="card-title">${product.name}</h5>
    //       <p id="category" class="card-text">
    //         ${product.quantityPerUnit}
    //       </p>
    //       <p id="price" class="card-text">
    //        ${product.unitPrice}
    //       </p>
    //       <a id="stock" href="#" class="btn btn-primary">${product.unitsInStock}</a>
    //     </div>
    //   </div>`;
    //     productList.innerHTML += detail;
    // });
    data.forEach(product => {
        const productBox = document.createElement("div");
        productBox.className = "p-3 m-3";
        productBox.setAttribute("style","border:1px solid silver");
        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = product.name;
        productBox.appendChild(title);
        const priceElement = document.createElement("p");
        priceElement.className = "card-text";
        priceElement.textContent = product.unitPrice + " $";
        productBox.appendChild(priceElement);
        const stockElement = document.createElement("p");
        stockElement.className = "card-text";
        stockElement.textContent = product.unitsInStock + " Adet";
        productBox.appendChild(stockElement);
        productList.appendChild(productBox);
    });
    
    
})

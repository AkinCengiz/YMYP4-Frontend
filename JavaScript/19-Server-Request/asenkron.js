//https://northwind.vercel.app/api/categories
//https://northwind.vercel.app/api/customers
//https://northwind.vercel.app/api/products
//https://jsonplaceholder.typicode.com/

class Request{
    async get(url){
        const response = await fetch(url);
        const data = await response.json();    
        return data;
    }

    async post(url,data){
        const response = await fetch(url,{
            method:"POST",
            body: JSON.stringify(data),
            headers : {"Content-type" : "application/json; charset=UTF-8"}
        });
        const newData = await response.json();
        return newData;
    }

    async put(url,data){
        const response = await fetch(url,{
            method : "PUT",
            body : JSON.stringify(data),
            headers : {"Content-type" : "application/json; charset=UTF-8"}
        });
        const newData = await response.json();
        return newData;
    }
    async delete(url){
        const response = await fetch(url,{method : "DELETE"});
        return "Veri başarıyla silindi";
    }
    
}

async function get(url){
    const response = await fetch(url);
    const data = await response.json();    
    return data;
    }

const request = new Request();

//console.log(request.get("https://northwind.vercel.app/api/categories/15"));

// request.get("https://northwind.vercel.app/api/categories")
// .then(data => console.log(data))
// .catch(err => console.error("Veri bulunamadı.",err));

// console.log(request.post("https://northwind.vercel.app/api/categories",{description: 'İstanbul Eğitim Akademi', name: 'YMYP - 4'})
// .then(data => console.log(data))
// .catch(err => console.error(err)));

// request.post("https://northwind.vercel.app/api/categorie",{description: 'İstanbul Eğitim Akademi', name: 'YMYP - 4'})
// .then(data => console.log(data))
// .catch(err => console.error(err));

// request.get("https://northwind.vercel.app/api/categories")
// .then(data => console.log(data))
// .catch(err => console.error("Veri bulunamadı.",err));

// request.put("https://northwind.vercel.app/api/categories/2",{
//         "description": "İstanbul Eğitim Akademi",
//         "name": "YMYP-4"
// }).then(data => console.log(data))
// .catch(err => console.error(err));

// request.delete("https://northwind.vercel.app/api/categories/2").then(data => console.log(data));

// console.log(request.delete("https://northwind.vercel.app/api/categories/2").then(data => console.log(data)));

get("https://northwind.vercel.app/api/categories").then(data => console.log(data));
//PROMISE


function getPromise(data){//Promise bize mutlaka bir sonuç döner. Olumlu ya da olumsuz mutlaka bir sonuç gönderir.
    return new Promise((resolve,reject)=>{
        if(data > 10){//promise sonucu olumlu olacak ise resolve metodu ile dönüş yapılır
            resolve(data+5);
        }else{//promise sonucu olumsuz olacak ise reject metodu ile dönüş yapılır
            reject("Parametre geçersiz");
        }
    })
}

let value;
getPromise(15).then(data => {value = data; console.log(value)}).catch(err => console.error(err));

//console.log(value); //Asenkron yapılarda önceki kod bitmeden bu kod çalışır ve işletilir. O nedenle value değeri undefined olarak döner.
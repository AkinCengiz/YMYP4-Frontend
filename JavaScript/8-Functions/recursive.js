//RECURSIVE

/**
 * 
 *                  factorial(a){
 *                      
*                          if(a <= 0)
*                          {
*                              return 1;
*                          }
 *                      return a * factorial(a-1); 
 * 
 *                  }
 * 
 * 
 * 
 */

let number = 5;

const factorial = (x) => {
    if(x <= 0){
        return 1;
    }
    return x * factorial(x-1);
}

console.log(number + "! : " + factorial(number));
function factorialIterativo(num) {
    ac = num
    for(let i = 1; i < num; i++){
        ac *= num-i
    }
    return ac
}

function factorial(num, limite = 0, ac = 1) {
   if(limite < num){
        ac *= num - limite
        limite++
        return factorial(num,limite,ac)
        }
        return ac
}

function fib(num) {
    if (num <= 1) return 1;
    return fib(num - 2) + fib(num - 1);
  }


function factores (num, arr = []) {
    if(num <= 1){
        return arr
    }
    if(num%2 === 0) {
        arr.push(2)
    } else if(num%3 === 0){
        arr.push(3)
    } else if(num % num === 0){
        arr.push(num) 
    }
    num /= arr[arr.length -1]
    return factores(num, arr)
}





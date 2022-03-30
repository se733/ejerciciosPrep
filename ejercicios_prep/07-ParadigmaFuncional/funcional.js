function duplicar(e) {
    return e * 2
}

function map(arr, fn) {
    let arr1 = []
    for(let i = 0; i < arr.length; i++){
        arr1.push(fn(arr[i]))
    }
    return arr1
}

function filter(arr, fn) {
    let arr1 = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i]) == true) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

function contains(prop, num) {
    if(Array.isArray(prop) == true) {
        for(let i = 0; i < prop.length; i++) {
            if(prop[i] == num){
                return true
            }
        } return false
    } 
    for(let key in prop) {
        if(prop[key] == true){
            return true
        }     
    }
    return false
}


function cuentaPalabras(str) {
    let acc = 1
    for(let i = 0; i <= str.length; i++){
        if(str[i] === " "){
            acc ++
        }
    }
    return acc
}

function reduce(arr, num, fn) {
    for (let i = 0; i < arr.length; i++) {
      num = fn(num, arr[i]);
    }
    return num;
  }

function cuentaPalabrasReduce(num, str){
    return num + cuentaPalabras(str)
}

function suma(arr){
    return reduce(arr, 0, function(a,b){
        return a + b
    })
}

function every(arr, fn) {
    return reduce(arr, true, (a, b) => {
      return fn(b) == a && true;
    });
  }

  function any(arr, fn) {
    return reduce(arr, false, (a, b) => {
      return fn(b) !== a || false;
    });
  }

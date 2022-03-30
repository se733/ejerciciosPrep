function concatenar(string) {
  for (let i = 1; i < arguments.length; i++) {
    string = string.concat(arguments[i]);
  }
  return string
}

function invocarFunciones() {
    let acc = ""
    for (let i = 0; i < arguments.length; i++) {
      acc += arguments[i]();
    }
    return acc
  }


function creadorDeIncrementos(incremento) {
 return function (num) {
      return num + incremento
  }
}


function invocacionUnica(fn) {
  let result;
  return function () {
    if (fn) {
      result = fn();
      fn = null;
    }
    return result;
  };
}

function objetoConClousure() {
  let num = 0
    return  {
    incremento : function () {
      num++
    },
    incrementoPor10 : function () {
      return  num += 10
    },
    pedirValor : function () {
      return num
    },
    cambiarValor : function (valor) {
      return num = valor
    },

  }
}


function ListaDeFuncionesInvitados (array, codigo) {
  let arr = [];
  for(let i = 0; i < array.length; i++){
    arr.push(function(code){
      if(code === codigo){
        return array[i]
      } else {
        return 'código secreto: invalido'
      } 
    })
  }
  return arr;
}


function armarListaDeInvitados(array , codigo){
  let listaOficial = []
    for (let i = 0 ; i < array.length ; i++ ){
        listaOficial.push(array[i](codigo))
      }
      return listaOficial
}



function setPropsOnObj(obj){
   obj.p = 5;
   obj['plataforma'] = 5
   obj.proximo = (num) => { return num + 1}
   obj.la = {
       clave : {
           secreta : {
               es : 404
           }
       }
   }
}

function setPropsOnArr(array) {
    array.hola = () => {
        return 'Hola!'
    }
    array['river'] = 'plate'
    array[0] = 5
    array.doble = (num) => { return num * 2 }
}

function setPropsOnFunc(functionObject) {
    var date = new Date()
    functionObject.year = date.getFullYear()
    functionObject.mitad = (num) =>{
        return num / 2
    }
    functionObject.prototype.helloWorld = () => {
        return 'Hello World'
    }
}


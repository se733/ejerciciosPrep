function crearCalculadora() {
   let inicio = 0
   let resultado = 0
   let operacion = {
       valor : function() {
           return inicio
        },
       sumar : function(num){
            inicio = resultado += num
       },
       restar : function(num){
            inicio = resultado -= num
       },
       reset : function() {
           return inicio = inicio - inicio
       }
   }
   return operacion
}


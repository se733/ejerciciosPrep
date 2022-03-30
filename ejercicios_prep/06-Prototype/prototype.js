
function Mamifero(nombre) {
  this.nombre = nombre;
  this.descendencia = [];
}

Mamifero.prototype.saludar = function () {
  return `Hola, mi nombre es ${this.nombre}`;
};

Mamifero.prototype.nuevoHijo = function () {
  hijo = new Mamifero(`${this.nombre} Jr`);
  this.descendencia.push(hijo);
  return hijo;
};


function Gato(nombre, color, descendencia) {
  Mamifero.call(this, nombre, color, descendencia);
  this.color = color;
  }
  Gato.prototype = Object.create(Mamifero.prototype);
  Gato.prototype.constructor = Gato;
  Gato.prototype.nuevoHijo = function (color) {
    var batman = new Gato(`${this.nombre} Jr`, color);
    this.descendencia.push(batman);
    return batman;
  };


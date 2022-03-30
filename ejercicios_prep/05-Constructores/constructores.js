class CalculadoraNPI {
    constructor() {
        this.arr = []
        this.resultado
    }
    agregar(num) {
        this.arr.push(num)
    }
    sumar() {
        if (this.arr.length < 2) {throw 'La calculadoraNPI necesita por lo menos 2 números'}
        let n1 = this.arr.pop(), n2 = this.arr.pop(), suma1 = n1 + n2
        this.arr.push(suma1)
        this.resultado = suma1
        return this.resultado
    }
    valor() {
        return this.resultado
    }
    restar() {
        if (this.arr.length < 2) {throw 'La calculadoraNPI necesita por lo menos 2 números'}
        let n1 = this.arr.pop(), n2 = this.arr.pop(), resta1 = n2 - n1
        this.arr.push(resta1)
        this.resultado = resta1
        return this.resultado
    }
    dividir() {
        if (this.arr.length < 2) {throw 'La calculadoraNPI necesita por lo menos 2 números'}
        let n1 = this.arr.pop(), n2 = this.arr.pop(), div = n2 / n1
        this.arr.push(div)
        this.resultado = div
        return this.resultado
    }
    multiplicar() {
        if (this.arr.length < 2) {throw 'La calculadoraNPI necesita por lo menos 2 números'}
        let n1 = this.arr.pop(), n2 = this.arr.pop(), mult = n2 * n1
        this.arr.push(mult)
        this.resultado = mult
        return this.resultado
    }
}









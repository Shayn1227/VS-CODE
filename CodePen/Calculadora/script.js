var nome = "Antony"

var nota1 = 9.4355
var nota2 = 7.234
var nota3 = 4.234
var nota4 = 2.183

var notaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1)

console.log("Nota final de " + nome)
console.log("Sua nota é " + notaFinal)

if (notaFinal < 6) {
    console.log("Reprovado")
}
if (notaFinal > 6) {
    console.log("Aprovado")
}
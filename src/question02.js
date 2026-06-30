import leia from 'readline-sync'
console.log("===Notas do carnaval 2025===")
var nota1 = leia.questionFloat("Nota: ")
var nota2 = leia.questionFloat("Nota: ") // menor nota
var nota3 = leia.questionFloat("Nota: ")
var nota4 = leia.questionFloat("Nota: ")
var nota5 = leia.questionFloat("Nota: ")
var nota6 = leia.questionFloat("Nota: ") //maior nota

console.log("===Anuladas: segunda nota e sexta nota===")

var media =  (nota1+ nota3 + nota4 + nota5) / 4

if(media >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
} 
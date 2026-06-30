import leia from 'readline-sync'
console.log("===Notas do carnaval 2025===")
var nota1 = 5
var nota2 = 1
var nota3 = 9
var nota4 = 9
var nota5 = 8.5
var nota6 = 10

console.log("===Anuladas: segunda nota e sexta nota===")

var media =  (nota1+ nota3 + nota4 + nota5) / 4

if(media >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
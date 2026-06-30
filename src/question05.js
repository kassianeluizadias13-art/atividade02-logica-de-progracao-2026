import leia from 'readline-sync'

var tempAtual = leia.questionInt("Digite a temp atual: ")
var opcao = leia.keyInSelect(["C -> F", "F -> C", "C -> K", "K -> C", "F -> K", "K -> F"], "INFORME A CONVERSÃO")


switch(opcao){
    case 0: 
    var F = (tempAtual * 1.8) +32
    console.log(F)
    break
    case 1:
    var C = (tempAtual - 32) * (5/9)
    console.log(C)
    break
    case 2: 
    var K = tempAtual + 273.15
    console.log(K)
    break
    case 3:
    var C1 = tempAtual - 273.15
    console.log(C1)
    break
    case 4:
    var K1 = (tempAtual - 32) * (5/9) + 273.15
    console.log(K1)
    break 
    case 5:
    var F1 = (tempAtual - 273.15) * 1.8 + 32
    console.log(F1.toFixed(2))
    break}
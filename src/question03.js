import leia from 'readline-sync'

var gols = leia.questionInt("O time fez: ") * 50
var passesC = leia.questionInt("Passes certos do time: ") * 10
var passesE = leia.questionInt("Passes errados do time: ") * -5

var pontuacao = gols + passesC + passesE
 if(pontuacao < 50){
    console.log("Pessima partida")
 } else if(pontuacao >= 50 && pontuacao <=100){
    console.log("Partida ruim")
 } else if(pontuacao >=100 && pontuacao <= 150){
    console.log("Fez o basico")
 } else if(pontuacao >=150 && pontuacao <=200){
    console.log("Foi bem")
 } else{
    console.log("Jogou muito")
 }
import leia from 'readline-sync'

var idade = leia.questionInt("Idade do cliente: ")
var diaria = leia.questionInt("Cliente ficou quantos dias na hospedagem: ")
        var valor = 100 * (20/100)
        var valor2 = 90 * (20/100)
        var valor3 = 80 * (20/100)
 if(diaria <= 5 && idade >= 60){
console.log("O cliente paga: " + valor)
 } else if(diaria >=6 && diaria <=10 && idade >= 60){
    console.log("O cliente paga: " + valor2)
 } else if(diaria === 11 & idade >=60){
    console.log("O cliente paga: " + valor3)
    } else if(diaria >= 6 && diaria <=10){
        console.log("O cliente paga: 90,00 R sem desconto")

    } else if(diaria === 11){

        console.log("O cliente paga: 80,00 R sem desconto") 
            

        } else if(diaria <= 5){
        
            console.log("O cliente paga: 100,00 R sem desconto")
        }
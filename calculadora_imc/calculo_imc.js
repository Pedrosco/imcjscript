function CalculoImc (){
   let peso = document.getElementById("peso").value
   let altura = document.getElementById("altura").value/100
   let pesoTratado = parseFloat(peso)
   let alturaTratado = parseFloat(altura)
   let calculo = (pesoTratado/alturaTratado**2)

    if (calculo<16){
       resultado.innerText = "Você está com magreza grave"
    }

    if (calculo>=16 && calculo <=17){
       resultado.innerText = "Você está com magreza moderada"
    }

    if (calculo>=17 && calculo <=18){
      resultado.innerText= "Você está com magreza leve"
    }

    if (calculo>= 18 && calculo <= 25){
       resultado.innerText = "Você está dentro do peso ideal"
    }

    if (calculo>=25 && calculo<=30){
       resultado.innerText = "Você está com sobrepeso"
    }

    if (calculo>=30 && calculo<=35){
       resultado.innerText = "Você com obesidade grau I"
    }
    
    if (calculo>=35 && calculo<=40){
       resultado.innerText = "Você com obesidade grau II(severa)"
    }

    if (calculo>=40){
       resultado.innerText = "Você está com obesidade mórbida"
    }

console.log(calculo)
}
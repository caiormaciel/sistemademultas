
// Declaração de variáveis

var resultados = document.querySelector("h3#resultados")
var velmedida = document.querySelector('input#velo')


// Regras de funcionamento, utilizando a condicional - if, else if, else.

btn.onclick = function clicar() {
 
    var medida = Number(velmedida.value)


     if (medida >= 70 && medida < 299)
    {
        resultados.innerHTML = `Você ultrapassou os limites de velocidade, está MULTADO! sua velocidade foi de <strong> ${medida} km/h! </strong>.`
    } 
    
    else if (medida == '')
    {
        alert("preencha o campo de velocidade!.")
    } 

    else if (medida >= 300)
    {
        alert("Confira o valor inserido!.")
    }

    else {
        
        resultados.innerHTML = `A velocidade do seu carro é de ${medida} km/h!! </br> Dirija sempre utilizando o cinto de segurança!.`
    } 

}

// Realizar a limpeza dos campos preenchidos para nova consulta.

btnn.onclick = function() {
    resultados.innerHTML = "Insira a Velocidade no campo acima!."
    velmedida.value = ""
}

// https://www.youtube.com/watch?v=EEStcIe8rAM&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=17



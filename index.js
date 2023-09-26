let nome = document.querySelector("#nome")
const plano = document.querySelector("#interest")
const resposta = document.querySelector("#resposta")
const qtdPotes = document.querySelector("#qtd_potes")
const buttonSubmit = document.querySelector("#btn")
const resultado = document.querySelector("output")


qtdPotes.addEventListener("input", function () {
    const labelPotes = document.querySelector("label[for='qtd_potes']")
    if (qtdPotes.value == 1){
    labelPotes.innerHTML = `Quantidade: ${qtdPotes.value} pote por mês`
    } else {
    labelPotes.innerHTML = `Quantidade: ${qtdPotes.value} potes por mês`
    }   
    calcular()
})

plano.addEventListener("change", calcular)

function calcular(){
    const planoSelecionado = parseInt(plano.value)

    switch(planoSelecionado) {
        case 1: 
        valor = 50
        break;
        case 2: 
        valor = 30
        break;
        case 3:
        valor = 20
        break;
        default: 
        valor = 0
    }

    let taxa= 1 + qtdPotes.value * 0.5
    valor *= 1 + taxa
   
    resposta.innerText = `Valor do plano: R$${valor}`
}

buttonSubmit.addEventListener("click", function(event){
    event.preventDefault()
    event.getElementById("form").submit()
})
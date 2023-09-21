

const nome = window.document.getElementById("nome").value
const plano = window.document.getElementById("interest").value
const resposta = window.document.getElementById("resposta").value

plano.addEventListener("change", function(){

    let mens = ""

    switch(plano){
        case 1: 
        mens = "Plano Premium"
        break;
        case 2: 
        mens = "Plano Tradizionales"
        break;
        case 3:
        mens = " Plano Tazza"
        break;
        case 4:
        mens = "Plano Caffè consis"
        break;
    }
    
    mens = `Olá ${nome} você escolheu o plano de assinatura ${mens}`
    resposta.innerText = mens
});

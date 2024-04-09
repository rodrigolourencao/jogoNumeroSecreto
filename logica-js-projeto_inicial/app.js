alert('Bem vindo ao jogo do número secreto');
let numeroMaximo = 50
let numeroSecreto = parseInt((Math.random()* numeroMaximo) + 1);
let chute;
let tentativas = 1;
//loop enquanto chute diferente do numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute = numero secreto 
    if (numeroSecreto == chute) {
        // while para
        break;
        
    } else {
        
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior que ${chute}`);
        } else { 
            alert(`O numero secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTenntativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Voce acertou! ${numeroSecreto} com ${tentativas} ${palavraTenntativa}!`);

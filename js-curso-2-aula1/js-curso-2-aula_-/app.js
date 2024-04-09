let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

menssagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('H1', 'Acertou!');
        exibirTextoNaTela ('p', `Você acertou o número secreto com ${qtdTentativas()}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       if (chute > numeroSecreto) {
        exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
       } else {
        exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
       }
       numeroTentativas++;
       limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let qtdDeElementosLista = listaDeNumerosSorteados.length;

    if (qtdDeElementosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function qtdTentativas(){
    if (numeroTentativas > 1){
        return (`${numeroTentativas} tentativas`);
    } else {
        return (' 1 tentativa');
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    menssagemInicial();
}

function menssagemInicial(){
    exibirTextoNaTela ('h1', 'Jogo Número Secreto');
    exibirTextoNaTela ('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

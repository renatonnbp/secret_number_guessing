let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou');
    let mensagem = `Você descobriu o número secreto com ${tentativas} tentativa(s)!`
    exibirTextoNaTela('p', mensagem);
    document.querySelector('#reiniciar').removeAttribute('disabled');
  } else {
    tentativas++
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function novoJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100 + 1);
}


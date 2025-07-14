// progresso.js

function marcarFaseConcluida(linguagem, fase) {
  const chave = `${linguagem}_fase${fase}_done`;
  localStorage.setItem(chave, 'true');
}

function todasFasesConcluidas(linguagem) {
  for (let i = 1; i <= 3; i++) {
    if (localStorage.getItem(`${linguagem}_fase${i}_done`) !== 'true') {
      return false;
    }
  }
  return true;
}


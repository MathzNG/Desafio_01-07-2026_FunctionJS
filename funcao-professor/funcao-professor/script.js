/* ============================================================
   script.js  —  GABARITO / ROTEIRO DE LIVE CODING (Professor)
   ------------------------------------------------------------
   Aula de funções em 7 etapas de complexidade crescente + projeto.
   O aluno tem este mesmo arquivo EM BRANCO (funcao-aluno).
   Digite cada ETAPA ao vivo; a cada etapa: salve -> F5 -> confira.
   ============================================================ */


/* AJUDANTE — escreve um texto numa caixa da página e no console. */
function mostrar(id, texto) {
  document.getElementById(id).textContent = texto;
  console.log(texto);
}


/* ===== ETAPA 1 — O QUE É UMA FUNÇÃO (sem entrada) =====
   Criar não executa; é preciso CHAMAR. */
function apresentar() {
  mostrar("saida1", "Bem-vindo à aula!");
}
apresentar();


/* ===== ETAPA 2 — PARÂMETRO (entrada) =====
   'nome' é o parâmetro; o valor na chamada é o argumento. */
function saudar(nome) {
  mostrar("saida2", "Olá, " + nome + "!");
}
saudar("Ana");


/* ===== ETAPA 3 — RETORNO (saída) =====
   'return' devolve um valor que dá para guardar e reusar. */
function somar(a, b) {
  return a + b;
}
let resultado = somar(7, 5);
mostrar("saida3", "somar(7, 5) devolveu " + resultado);


/* ===== ETAPA 4 — REUTILIZAÇÃO =====
   A mesma função 'somar', vários usos. */
let texto4 =
  "2 + 3 = " + somar(2, 3) + "\n" +
  "10 + 5 = " + somar(10, 5) + "\n" +
  "100 + 1 = " + somar(100, 1);
mostrar("saida4", texto4);


/* ===== ETAPA 5 — DECISÃO DENTRO DA FUNÇÃO (if/else) =====
   A função decide o que devolver conforme a entrada. */
function situacao(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Recuperação";
  }
}
let texto5 =
  "Nota 8 -> " + situacao(8) + "\n" +
  "Nota 4 -> " + situacao(4);
mostrar("saida5", texto5);


/* ===== ETAPA 6 — UMA FUNÇÃO QUE USA OUTRA (composição) ===== */
function comDesconto(preco) {
  return preco * 0.9;
}
function comFrete(preco) {
  return preco + 10;
}
function precoFinal(preco) {
  return comFrete(comDesconto(preco));
}
mostrar("saida6", "Preço 100 -> paga " + precoFinal(100));


/* ===== ETAPA 7 — FUNÇÃO QUE PROCESSA UMA LISTA (array) ===== */
function somarLista(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
}
let notas = [7, 9, 6, 10];
mostrar("saida7", "Soma da lista [7,9,6,10] = " + somarLista(notas));


/* ===== PROJETO — CALCULADORA COM TRÊS FUNÇÕES ===== */
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}

function calcular(operacao) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let r;
  if (operacao === "somar") {
    r = somar(a, b);
  } else if (operacao === "subtrair") {
    r = subtrair(a, b);
  } else {
    r = multiplicar(a, b);
  }
  mostrar("resultado", a + " " + operacao + " " + b + " = " + r);
}

document.getElementById("btn-somar").addEventListener("click", function () {
  calcular("somar");
});
document.getElementById("btn-subtrair").addEventListener("click", function () {
  calcular("subtrair");
});
document.getElementById("btn-multiplicar").addEventListener("click", function () {
  calcular("multiplicar");
});

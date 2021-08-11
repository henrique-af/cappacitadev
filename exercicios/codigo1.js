// 1) Remova o último item da variável:

// listaDeDoces = [“barra de chocolate”,”bombom”,”bala de goma”,”cocada”]

// Imprima a nova variável para verificar se o elemento foi removido

// 2) Agora não vamos só remover, você deve guardar o último elemento da variável listaDeDoces em uma nova variável

var listaDeDoces = ['barra de chocolate', 'bombom', 'bala de goma', 'cocada'];

listaDeDoces.pop();

console.log(listaDeDoces);

var ultimoElemento = listaDeDoces.pop();

console.log(listaDeDoces);
console.log(ultimoElemento);
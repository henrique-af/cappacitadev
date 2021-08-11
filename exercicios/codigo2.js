// Utilize a função.map() no array a seguir e retorne a raiz quadrada de cada
// elemento usando também a função Math.sqrt, não
// esqueça de imprimir na tela para ver o resultado.

var numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6];

console.log(numerosAleatorios.map(Math.sqrt));

console.log(numerosAleatorios.map(function (num) {
    return num / 2;
}));
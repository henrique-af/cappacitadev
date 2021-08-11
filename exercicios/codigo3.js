// Crie uma função que retorna os números pares, a seguir, utilize a função.filter() na
// variável numerosAleatorios passando a função que você criou como callback.Veja
// no slide sobre.filter() como fizemos

function pares(num) {
    if (num % 2 === 0) {
        return num;
    };
}

var numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6].filter(pares);

console.log(numerosAleatorios);
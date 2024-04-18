/* ATENÇAO !!!!!!!!!!!!!!!!!!!!!!!!!!
 As respostas estao separadas por funçao, p de parte e ex com o numero do exercicio 
exemplo p1Ex1 = Seria parte 1 - exercicio 1 */

function p1Ex1() {
    let text
    // armazena na variável o usuário digitar
    text = prompt("Digite alguma coisa");
    // mostra na tela o valor da variável.
    alert(text);
}

/* p1Ex1(); */

function p1Ex2() {
    // Variáveis usadas para fazer as operações: x e y. Total armazena o valor resultante de cada um.
    let x, y, total = 0;

    x = Number(prompt("digite um valor"));
    y = Number(prompt("digite um valor"));


    //as operações
    total = x + y;
    alert('Soma ' + total);

    total = x - y;
    alert('Substração' + total);

    total = x * y;
    alert('Multiplicação' + total);

    total = x / y;
    alert('Divisão: ' + total.toFixed(2));

}

function p1Ex3() {
    const pi = 3.14159;
    let raio, area = 0;

    raio = Number(prompt('Valor do raio: '));

    area = pi * (raio * raio);

    alert('Valor ' + area.toFixed(4));

}
/* 
p1Ex3(); */

function p1Ex4() {
    let A, B, C, D, dif = 0;

    A = Number(prompt('Valor de A: '));
    B = Number(prompt('Valor de B: '));
    C = Number(prompt('Valor de C: '));
    D = Number(prompt('Valor de D: '));

    dif = (A * B - C * D);

    alert('Resultado da dif: ' + dif.toFixed(2));
}

function p1Ex5() {
    let num, hr, valuePerHr, salary = 0;

    num = prompt('ID do empregado: '); //como n precisa ser usado em contas, nao tem necessidade converter a var para number
    hr = Number(prompt('Horas trabalhadas: '));
    valuePerHr = Number(prompt('Salario por hora: '));

    salary = hr * valuePerHr;

    alert("ID = " + num + " ---- Salario total " + salary.toFixed(2) + "U$$");
}

function p1Ex6() {
    /* Fazer um programa para ler o código de uma peça 1, o número de
        peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o
        número de peças 2 e o valor unitário de cada peça 2. Calcule e
        mostre o valor a ser pago.
 */

    let cod1, qtd1, value1, cod2, qtd2, value2, total = 0;

    cod1 = prompt('Digite o codigo da peça 1:'); //como n precisa ser usado em contas, nao tem necessidade converter a var para number
    qtd1 = Number(prompt('Digite a qtd da peça 1:')); 
    value1 = Number(prompt('Digite o valor da unidade'));
    cod2 = prompt('Digite o codigo da peça 2:'); //como n precisa ser usado em contas, nao tem necessidade converter a var para number
    qtd2 = Number(prompt('Digite a qtd da peça 2:'));
    value2 = Number(prompt('Digite o valor da unidade'));

    //calculo
    total = (qtd1 * value1) + (qtd2 * value2);

    alert('Total > ' + total.toFixed(2));
}/* 
p1Ex6(); */
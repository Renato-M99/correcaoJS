function p1Ex1(){
    let text
    // armazena na variável o usuário digitar
    text = prompt("Digite alguma coisa");
    // mostra na tela o valor da variável.
    alert(text);
}

/* p1Ex1(); */

function p1Ex2(){
    // Variáveis usadas para fazer as operações: x e y. Total armazena o valor resultante de cada um.
    let x, y, total = 0;

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
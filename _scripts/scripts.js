/* ATENÇAO !!!!!!!!!!!!!!!!!!!!!!!!!!
 As respostas estao separadas por funçao, p de parte e ex com o numero do exercicio 
exemplo p1Ex1 = Seria parte 1 - exercicio 1 */
// ---------------------------------------- PARTE 1 ----------------------------------------- //
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
// ---------------------------------------- PARTE 2 ----------------------------------------- //

function p2Ex1() {
    let valor;

    valor = Number(prompt('Digite um valor: '));

    /* para resolver esse problema seria necessario usar %, ele mostra o resto de uma divisao
    no caso desse exemplo, precisamos saber se o resto do valor  digitado pelo usuario divido por 2 resultaria em zero. Caso for, ent eh par, senao, seria impar */
    if (valor % 2 == 0) {
        alert('O valor ' + valor + ' eh par');
    }
    else {
        alert('O valor ' + valor + ' eh impar');
    }
}
/* p2Ex1() */

function p2Ex2() {
    /* Peça para digitar o ano de nascimento dele(a) e o ano atual,
    em seguida, mostre na tela a idade da pessoa e se ela seria:
    - criança: 0 ate 13 anos
    - adolescente: 14 ate 18
    - adulta: 18 ate 60
    - idosa: 60 */
    // tbm poderia ser const anoAtual = 2024, mas n fiz dessa forma pra deixar o codigo mais dinamico
    let anoAtual, anoNascimento, idade = 0;

    anoAtual = Number(prompt('Informe o ano atual: '));
    anoNascimento = Number(prompt('Informe em o ano de seu nascimento: '));

    //calculo para descobrir a idade
    //observaçao sobre subtraçao: tomar cuidado, sempre coloque o numero maior na frente na equaçao, pois senao, o valor vai dar negativo.
    idade = anoAtual - anoNascimento;
    // hora de verificar e mostrar na tela, usaremos if e else-if.
    if (idade <= 13) {
        alert('Sua idade ' + idade + ', equivale a idade de uma criança!');
    }
    else if (idade > 13 && idade < 18) {
        alert('Sua idade ' + idade + ', equivale a idade de um adolescente!');
    }
    else if (idade >= 18 && idade < 60) {
        alert('Sua idade ' + idade + ', equivale a idade de um adulto!');


    } else {//nesse caso, nao seria necessario usar condiçoes, pois se todas derem negativo apenas o bloco else sera verdadeiro!
        alert('Sua idade ' + idade + ', equivale a idade de um idoso!');

    }
    // aqui, o alert precisava estar em cada if, pois a mensagem depende do resultado da subtraçao e da condiçao passada
}/* 
p2Ex2(); */

function p2Ex3() {
    /* Pergunte ao cliente qual das quatro operações básicas
    aritméticas ele deseja fazer e em seguida peça-o para digitar dois
    valores. Em seguida mostre o valor na tela.*/

    let op, valor1, valor2, total = 0;
    // aqui armazenaremos qual opçao o usuario quer usar usando teclas especificas que depois usaremos para dar como condiçao para realizar os calculos.
    op = prompt('Voce quer soma (+), subtraçao(-), multiplicaçao(*) ou divisao(/)?');
    // armazenando os numeros da operaçao
    valor1 = Number(prompt('primerio valor'));

    valor2 = Number(prompt('segundo valor'));
    // ---------------------------- //
    // baseado no valor(variavel op) que o usuario digitou, vamos determinar atraves do if-else se a conta seria feita com qual operaçao.
    if (op == '+') {
        total = valor1 + valor2;
    } else if (op == '-') {
        total = valor1 - valor2;
    } else if (op == '*') {
        total = valor1 * valor2;
    } else if (op == '/') {
        // esse if nao seria obrigatorio nesse exercicio, mas por proteçao impedi que o usuario dividisse um numero por 0, pois eh impossivel tal operaçao
        if (valor2 == 0) {
            alert('impossivel dividir um valor por 0')
        } else {
            total = valor1 / valor2;
        }

    }
    //nao foi necessario usar um alert pra cada if, pois isso geraria muitas linhas desnecessarias 
    //o .toFixed(2) serve para limitar as casas decimais! Vc NAO precisaria usar caso nao quisesse, mas esta ai por fins didaticos.
    alert('O resultado da sua operaçao foi : ' + valor1 + ' ' + op + ' ' + valor2 + ' = ' + total.toFixed(2));

}

/* p2Ex3(); */

function p2Ex4() {

    let mes;
    // como nao chegamos na parte de vetores, nos referiremos aos meses atraves de seu numero no calendario.
    mes = Number(prompt('qual mes(em numero de 1 a 12): '));

    //esse if serve para proteger o programa, para nao deixar o usuario digitar valores que fogem dos meses no calendario.
    if (mes > 0 && mes < 13) {
        
    //verificando os valores para determinar as estaçoes
        if (mes >= 3 && mes < 6) {
            alert('Outono');
        }
        else if (mes >= 6 && mes < 9) {
            alert('Inverno');
        }
        else if (mes >= 9 && mes < 12) {
            alert('Primavera');
        }
        else if (mes == 12 || mes < 3) {
            alert('Verao');
        }
    }
    else{
        alert('Valor invalido, lembre-se que os meses vao de 1 a 12.')
    }
}
/* p2Ex4(); */

function p2Ex5(){
    let valor;

    valor = Number(prompt('Digite um valor:'));

    if(valor < 0){
        alert('O valor ' + valor + ' eh negativo!');

    }
    else{
        alert('O valor ' + valor + ' eh positivo!');
    }
}
p2Ex5();
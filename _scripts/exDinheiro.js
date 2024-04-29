const div = document.querySelector('.result');







let withdraw, nota = 0, nota1 = 0, nota5  = 0, nota10  = 0, nota50  = 0, nota100  = 0;
withdraw = Number(prompt('Qual o valor de saque?'));
let resposta = 0;

    if (withdraw >= 10 && withdraw <= 600){
        nota100 = parseInt(withdraw/100);
        withdraw -= nota100 * 100;
        nota50 = parseInt(withdraw/50);
        withdraw -= nota50 * 50;
        nota10 = parseInt(withdraw/10);
        withdraw -= nota10 * 10;
        nota5 = parseInt(withdraw/5);
        withdraw -= nota5 * 5;
        nota1 = parseInt (withdraw /1);
        nota1 = withdraw;
        if(nota100 > 0){
            let p = document.createElement('p');
        
            div.append(p);
            p.innerHTML= `Notas de 100: ${nota100}`;
        }
        if(nota50 > 0){
            let p = document.createElement('p');
        
            div.append(p);
            p.innerHTML= `Notas de 50: ${nota50}`;
        }
        if(nota10 > 0){
            let p = document.createElement('p');
        
            div.append(p);
            p.innerHTML= `Notas de 10: ${nota10}`;
        }
        if(nota5 > 0){
            let p = document.createElement('p');
        
            div.append(p);
            p.innerHTML= `Notas de 5: ${nota5}`;
        }
        if(nota1 > 0){
            let p = document.createElement('p');
        
            div.append(p);
            p.innerHTML= `Notas de 1: ${nota1}`;
        }
        
    }
    else{
        alert("Valor invalido, apenas de 10 a 600")
    }

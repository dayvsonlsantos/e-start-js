//1)      Exibir no console o resultado das seguintes validações, dado o valor da variável _numero:

let _numero = 55;

//a)       Se o valor for menor que zero, mostrar: O valor número é um Número negativo.

//b)      Se o valor for maior ou igual a zero, mostrar: O valor número é um Número positivo.

if (_numero < 0) {
    console.log(" O valor " + _numero + " é um Número negativo");
} else {
    console.log(" O valor " + _numero + " é um Número positivo");
}

 

//2)      Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:

//a)       O (valor A  + valor C)  é maior que valorB

             //i) Se for, exibir no console os valores de valor A + Valor C e a soma deles.

             //ii) Se não for, exibir no console que os valores de valor A + Valor C é igual ao valor B.

function validarValores(valorA, valorB, valorC){
    let soma = parseInt(valorA) + parseInt(valorC);
    if (soma > parseInt(valorB)) {
        console.log("valorA: " + valorA + "\n" + "ValorC: " + valorC + "\n" + "Soma: " + soma)
    } else {
        console.log("valorA: " + valorA + "\n" + "ValorC: " + valorC + "\n" + "É igual ou menor que o ValorB: " + valorB)
    }
}

validarValores(30, 25, 42)


//3)      Os alunos da turma de Front-end estão estudando em horários diferentes:

//a)       Se o horário for o matutino, mostrar a mensagem "Bom Dia!".

//b)      Se o horário for vespertino, mostrar "Boa Tarde!".

//c)       Se o horário for noturno, mostrar "Boa Noite!".

//d)      Se não houver informação, mostrar  "Valor Inválido!".

function turno(horario) {
    switch (horario) {
        case "matutino":
            console.log("Bom Dia!");
            break;
        case "vespertino":
            console.log("Boa Tarde!");
            break;
        case "noturno":
            console.log("Boa Noite!");
            break;
        default:
            console.log("Valor Inválido!");
            break;
    }
}

let respostaTurno = prompt("Informe o seu turno: \n matutino, vespertino, noturno");

turno(respostaTurno);
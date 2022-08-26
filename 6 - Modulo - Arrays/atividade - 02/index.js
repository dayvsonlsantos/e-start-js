//1)      Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.

//a)       Coloque eles em ordem crescente.

//b)      Exibir no Console.

let numeros = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];
numeros.sort(function (num1, num2) {
    return num1 - num2;
});
console.log(numeros);

//2)      Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.

let times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];

//a)       Adicionar o time "Flamengo" no final do array.

times.push("Flamengo");

//b)      Remover o time que está no início do array.

times.shift();

//c)       Adicionar o time "Palmeiras" no início do array.

times.unshift("Palmeiras");

//d)      Adicionar o time "Grêmio" no final do array.

times.push("Grêmio");

//e)      Adicionar os times "São Paulo" e "Santos" do início do array.

times.unshift("São Paulo");
times.unshift("Santos");

//f)        Exibir, no console, a quantidade de elementos no array.

console.log(times.length-1);

//g)       Remover o time que está no final do array.

times.pop();

//h)      Exibir, no console, em ordem crescente os times que estão no array.

times.sort(function (time1, time2) {
    return time1.localeCompare(time2);
});
console.log(times);


//3)      Criar um array contendo 7 atividades que você faz durante o dia.

let atividades = ["tomar banho", "ir a faculdade", "almoçar", "dormir", "codar", "estudar", "pegar o onibus"]

//a)       Exibir no console as atividades na ordem inversa.

atividades.sort(function (atv1, atv2) {
    return atv2.localeCompare(atv1);
});
console.log(atividades);

//b)      Selecionar e exibir no console, os elementos nas posições 3 e 6.

console.log(atividades[3]);
console.log(atividades[6]);

//c)       Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).

console.log(atividades.toString().replaceAll(",", " - "));

//d)      Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.

let outrasAtividades = ["ver séries", "conversar"]

let todasAtividades = atividades.concat(outrasAtividades);
console.log(todasAtividades)

//4)      Criar um array com o nome de 5 cidades.

let cidades = ["Recife", "São Paulo", "Gramado", "Igarassu", "Camaragibe"]

//a)       Exibir, no console, em ordem crescente as cidades que estão no array.

cidades.sort(function (cidade1, cidade2) {
    return cidade1.localeCompare(cidade2);
});
console.log(cidades);

//b)      Remover a cidade que está no início do array.

cidades.shift();

//c)       Remover a cidade que está no final do array.

cidades.pop();

//d)      Exibir, no console, em ordem crescente os times que estão no array.

cidades.sort(function (cidade1, cidade2) {
    return cidade1.localeCompare(cidade2);
});
console.log(cidades);
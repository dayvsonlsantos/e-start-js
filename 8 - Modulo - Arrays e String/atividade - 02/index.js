//1)      Calcular a tabuada de multiplicar de 5.

//a)       Adicionar o resultado de cada cálculo em um array.

//b)      Transformar o array em string.

//c)       Exibir no console.

let tabuada5 = [];

for (let cont = 1; cont <= 10; cont++){
    tabuada5.push(`${cont} * 5 = ` + cont*5)
}

console.log(tabuada5.toString().replaceAll(",", "\n"));

//2)      Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius: 

//(n-32)/1.8 

//a)       n é o valor da temperatura a ser convertida.

//b)      Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37

let temperaturas = [54, 78, 56, 98, 0, 12, 11, 37]

//c)       Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius.

for (let i = 0; i < temperaturas.length-1; i++){
    celsius = (temperaturas[i]-32)/1.8
    console.log("Fahrenheit: " + temperaturas[i] + "\n" + "Celcius: "+ celsius)
}


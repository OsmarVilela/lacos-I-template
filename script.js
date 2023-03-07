// pratica guiada

/* Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.
Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.
Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0 
O resultado deve ser: 70 */
/* 
const somaNumeros = ()=>{
    let numero = Number( prompt("Digite um número"))
    let soma = 0
    while(numero !== 0){
        soma = soma + numero
        numero = Number(prompt("Digite outro número"))
    }

    console.log("A soma dos numeros é:", soma);
}

somaNumeros() */
/* 
Vamos escrever um programa que recebe um número do usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado. */

/* const imprimiNumero = ()=>{
    const numero = Number(prompt("Digite um número"))

    for(let i = 0; i <= numero; i++){
        console.log(i);
    }

}

imprimiNumero() */
/* 
const numeros = [55,33,22,11,50]

const imprimeArray = (array)=>{
    console.log(array);

    for(let i = 0; i < array.length; i++){
        console.log(`O elemento de indice ${i} é ${array[i]}`);
    }

}

imprimeArray(numeros) */
/* 
const permissaoAdmin = ()=>{

let tipoUsuario = prompt("Qual o tipo de usuário?").toUpperCase()

while(tipoUsuario !== "A"){
    console.log("Acesso Negado");
    tipoUsuario = prompt("Qual o tipo de usuário?").toUpperCase()
}
console.log("Boas vindas, Admin!");

}

permissaoAdmin() */

/* const tabuada = ()=>{
    let numero = 2

    for(let i = 0; i <= 10; i++){
        
        console.log(`${numero} x ${i} = ${numero*i} `)
    }

}
tabuada() */

/* const caixaAlta = ()=>{

const arrayStrings = ["oie", "como vai", "daalee", "ja deu", "mais um só"]

    for(let i = 0; i < arrayStrings.length; i++ ){
        console.log(arrayStrings[i].toUpperCase());
    }
}

caixaAlta() */
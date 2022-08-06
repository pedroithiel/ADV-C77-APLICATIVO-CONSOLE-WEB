
console.log("Aprendendo usar o Console");

console.log("---------------------");

console.log("Variaves concatenadas");

//Nome
var primeiroNome = "Byjus ";
var segundoNome = "Future ";
var terceiroNome = "School ";

var nomeCompleto = "";
nomeCompleto = primeiroNome.concat(segundoNome).concat(terceiroNome);

//nomeCompleto.concat(primeiroNome, segundoNome, terceiroNome).join(" ");

console.log("primeiroNome: " + primeiroNome);
console.log("segundoNome: " + segundoNome);
console.log("terceiroNome: " + terceiroNome);
console.log("nomeCompleto: " + nomeCompleto);
console.log("nomeCompleto Maiusculo: " + nomeCompleto.toUpperCase());
console.log("nomeCompleto Minusculo: " + nomeCompleto.toLowerCase());
console.log("nomeCompleto Tamanho: " + nomeCompleto.length);
console.log("nomeCompleto Mudar Letra 'B' para numero 3: " + nomeCompleto.replace("B", "3"));


console.log("---------------------");

console.log("Dois numeros (Operações)");

//Numeros
var primeiroNumero = 50;
var segundoNumero = 5;
var soma = primeiroNumero + segundoNumero;

console.log("primeiroNumero: " + primeiroNumero);
console.log("segundoNumero: " + segundoNumero);
console.log("Soma: " + soma);
console.log("Diminuir: " + (primeiroNumero - segundoNumero));
console.log("Dividir: " + primeiroNumero / segundoNumero);
console.log("Multiplicação: " + primeiroNumero * segundoNumero);


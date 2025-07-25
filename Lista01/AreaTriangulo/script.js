//Faça um programa para calcular área de um triângulo . Fórmula: (base * altura) / 2. 
let TriBase = Number(prompt("Informe o valor da base do triângulo para saber a área"));
let TriAltura = Number(prompt("Informe o valor da altura do triângulo para saber a área"));
let TriArea = (TriBase * TriAltura) / 2;

alert(`A área do triângulo de base ${TriBase}cm e altura ${TriAltura}cm é igual a ${TriArea}cm²`);
//Faça um programa para calcular área de um retângulo : A = b * h

let retBase = Number(prompt("Informe o valor da base do retângulo para calcular a área"));
let retAltura = Number(prompt("Informe o valor da altura do retângulo para calcular a área"));
let retArea = retBase * retAltura;

alert(`A área do retângulo de base ${retBase}cm e altura ${retAltura}cm é ${retArea}cm²`);
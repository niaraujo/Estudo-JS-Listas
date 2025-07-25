//Faça um programa para calcular área de um trapézio. (Base Maior + Base Menor) * Altura / 2
let TrapBaseMaior = Number(prompt("Informe o valor da base MAIOR"));
let TrapBaseMenor = Number(prompt("Informe o valor da base menor"));
let TrapAltura = Number(prompt("Informe o valor da altura"));
let TrapArea = ((TrapBaseMaior + TrapBaseMenor) * TrapAltura) /2;

alert(`A area do trapézio é ${TrapArea}cm²`);
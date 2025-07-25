//Faça um programa para calcular área de um losango. Área = (diagonal maior x diagonal menor) / 2. 
let LosDiagonalMaior = Number(prompt("Informe o valor da diagonal maior do losango"));
let LosDiagonalMenor = Number(prompt("Informe o valor da diagonal menor do losango"));
let LosArea = (LosDiagonalMaior * LosDiagonalMenor) / 2;

alert(`A área do losango com diagonal maior ${LosDiagonalMaior}cm e diagonal menor ${LosDiagonalMenor}cm é igual a ${LosArea}cm²`);
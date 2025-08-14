//Crie um objeto chamado carro com as propriedades marca e ano e um método mostrarInfo que imprime essas informações.
let carro = {
    marca: "Ford",
    ano: 2005,
    mostrarInfo: function(){
        console.log(`O carro que eu tenho é da marca ${this.marca} e do ano ${this.ano}`); // this é "Eu mesmo"
    }
};
carro.mostrarInfo() // chamando a função/método de dentro do objeto
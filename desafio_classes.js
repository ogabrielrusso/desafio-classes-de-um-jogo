class Hero {
    constructor(nome, idade, tipo) {
        this.name = nome;
        this.age = idade;
        this.type = tipo;
    }

    atack() {
        let ataque = "";
        if (this.type === "Mago") {
            ataque = "Magia";
        } else if (this.type === "Guerreiro") {
            ataque = "Espada";
        } else if (this.type === "Druída") {
            ataque = "Aco e Flecha";
        } else if (this.type === "Alquimísta") {
            ataque = "Poção";
        } else if (this.type === "Clérigo") {
            ataque = "Magia";
        } else if (this.type === "Paladino") {
            ataque = "Espada da Justiça";
        } else {
            ataque = "usou um ataque genérico";
        }
        console.log(`o ${this.type} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe
let mago = new Hero("Tom Riddle", 150, "Mago");
mago.atack(); // Saída: o mago atacou usando magia

let guerreiro = new Hero("Panda Pô", 35, "Guerreiro");
guerreiro.atack(); // Saída: o guerreiro atacou usando espada

let monge = new Hero("Yuna", 40, "Clérigo");
monge.atack(); // Saída: o monge atacou usando artes marciais

let ninja = new Hero("Pain", 28, "Paladino");
ninja.atack(); // Saída: o ninja atacou usando shuriken

// Função para criar um herói
function createHero(nome, idade, tipo) {
    return new Hero(nome, idade, tipo);
}

// Criação de vários heróis
const herois = [
    createHero("Hermione", 150, "Mago"),
    createHero("Panda Pô", 35, "Guerreiro"),
    createHero("Yuna", 40, "Clérigo"),
    createHero("Pain", 28, "Paladino"),
    createHero("Vivi", 1000, "Mago"),
    createHero("Zidane", 30, "Guerreiro")
];

// Loop para fazer cada herói atacar
for (const heroi of herois) {
    heroi.atack();
}

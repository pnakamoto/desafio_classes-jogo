class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let tipoAtaque;

        switch (this.tipo) {
            case "mago":
                tipoAtaque = "magia";
                break;
            case "guerreiro":
                tipoAtaque = "espada";
                break;
            case "monge":
                tipoAtaque = "artes marciais";
                break;
            case "ninja":
                tipoAtaque = "shuriken";
                break;
            default:
                tipoAtaque = "um ataque desconhecido";
        }

        console.log(`${this.nome}, o ${this.tipo}, atacou com ${tipoAtaque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthur", 25, "mago");
const heroi2 = new Heroi("Reysson", 30, "guerreiro");
const heroi3 = new Heroi("Careca", 20, "monge");
const heroi4 = new Heroi("Nakamoto", 22, "ninja");

heroi1.atacar(); // Saída: Arthur, o mago, atacou com magia
heroi2.atacar(); // Saída: Reysson, o guerreiro, atacou com espada
heroi3.atacar(); // Saída: Careca, o monge, atacou com artes marciais
heroi4.atacar(); // Saída: Nakamoto, o ninja, atacou com shuriken

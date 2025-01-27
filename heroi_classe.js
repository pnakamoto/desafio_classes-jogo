class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "magia"
        elif self.tipo == "guerreiro":
            ataque = "espada"
        elif self.tipo == "monge":
            ataque = "artes marciais"
        elif self.tipo == "ninja":
            ataque = "shuriken"
        else:
            ataque = "um ataque desconhecido"

        print(f"{self.nome}, o {self.tipo}, atacou com {ataque}")

# Exemplo de uso
heroi1 = Heroi("Arthur", 25, "mago")
heroi2 = Heroi("Reysson", 30, "guerreiro")
heroi3 = Heroi("Careca", 20, "monge")
heroi4 = Heroi("Nakamoto", 22, "ninja")

heroi1.atacar()  # Saída: Arthur, o mago, atacou com magia
heroi2.atacar()  # Saída: Leon, o guerreiro, atacou com espada
heroi3.atacar()  # Saída: Kai, o monge, atacou com artes marciais
heroi4.atacar()  # Saída: Shin, o ninja, atacou com shuriken

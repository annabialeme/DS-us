// Importa a classe Aluno do arquivo Aluno.js //
import Aluno from "./Aluno.js";

// Define a classe Sabotador que herda da classe Aluno //
class Sabotador extends Aluno {
    // Construtor da classe Sabotador, que recebe um objeto aluno como parâmetro//
    constructor(aluno) {
    super(
    aluno.grupo,
    aluno.nome,
    aluno.apelido,
    aluno.pegarSenha(),
    aluno.estaVivo
    );
// Define os atributos específicos do Sabotador //
    this.localAtual = "Recepção"; // Localização inicial do Sabotador //
    this.tempoDesocupado = Date.now(); // Marca o tempo atual como tempo desocupado //
    this.votos = 0; // Inicia a contagem de votos recebidos como 0 //
    this.jaVotou = false; // Inicia o estado de votação como falso (não voltou)//
    this.pontos = 0; // Inicia a pontuação do Sabotadorcomo 0 //
    }

    //Método para mostrar o papel do Sabotador//
    mostrarPapel() {
    return `Sou jogador ${this.apelido} e sou um SABOTADOR com objetivo de atrapalhar a vida dos DEVs do SENAI ☠️`;
    }
// Método para eliminar um jogador alvo //
    eliminar(alvo) {
    return `O jogador ${alvo.apelido} foi eliminado pelo SABOTADOR ${this.apelido} 😈`;
    }
// Método para votar em um jogador alvo //
    votar(alvo) {
        //Verifica se o Sabotador já votou nesta rodada//
    if (this.jaVotou === true) {
        throw new Error("Você já votou nesta rodada."); // Lança um erro se já votou //
    }
    alvo.votos++; // Incrimina o número de votos do jogador alvo //
    this.jaVotou = true; // Marca que o Sabotador já votou nesta rodada //
    return `O jogador ${alvo.apelido} foi votado pelo ${this.apelido} 😈`;

    }
}

export default Sabotador; 

// Classe que representa um Quiz
class Quiz {
    constructor() {
    this.perguntas = [];
    }

 // Método para adicionar perguntas ao quiz
    obterPerguntaAleatoria() {
      const indiceAleatorio = Math.floor(Math.random() * this.perguntas.length);
    return this.perguntas[indiceAleatorio];
    }

    // Método para adicionar perguntas ao quiz
    verificarResposta(pergunta, respostaDada) {
    return pergunta.respostaCorreta === respostaDada;
    }
}

// Classe que representa uma pergunta
export default Quiz;
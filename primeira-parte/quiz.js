// Define a classe Quiz, que encapsula funcionalidades relacionadas a um questionário
class Quiz {
// O construtor é chamado ao criar uma nova instância da classe Quiz
    constructor() {
// Inicializa a propriedade perguntas como um array vazio para armazenar as perguntas do quiz
    this.perguntas = [];
    }

// Método para obter uma pergunta aleatória do array de perguntas
    obterPerguntaAleatoria() {

// Calcula um índice aleatório baseado no tamanho do array de perguntas
      const indiceAleatorio = Math.floor(Math.random() * this.perguntas.length);
// Retorna a pergunta correspondente ao índice aleatório gerado
    return this.perguntas[indiceAleatorio];
    }

// Método para verificar se a resposta dada está correta
    verificarResposta(pergunta, respostaDada) {
         // Compara a resposta correta da pergunta com a resposta fornecida e retorna true ou false
    return pergunta.respostaCorreta === respostaDada;
    }
}

// Exporta a classe Quiz como padrão, permitindo sua importação em outros módulos
export default Quiz;
class Salas {
    constructor (nome, tarefas, capacidadeMaxima)

{
    this.nome= nome
    this.tarefas = tarefas
    this.capacidadeMaxima= capacidadeMaxima
}

seApresentar(){
    console.log(`o nome da sala é ${this.nome}, os jogadores tem a tarefa de ${this.tarefas} e a capacidade máxima de jogadores é ${this.capacidadeMaxima}`);
}
}
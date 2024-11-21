class Tarefas {
    constructor (nome, status)

{
    this.nome = nome
    this.status = status
}

seApresentar(){
    console.log(`Esses são os nomes da tarefas que precisam ser feitas ${this.nome }, aqui mostra se a tarefa foi concluida ou nao ${this.status}`);
}
}
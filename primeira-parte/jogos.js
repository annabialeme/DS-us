class Jogos {
    constructor (nomeJogadores, tempoRestante, salas)

{
    this.nomeJogadores = nomeJogadores
    this.tempoRestante = tempoRestante
    this.salas = salas
}

seApresentar(){
    console.log(`Esses são os jogadores ${this.nomeJogadores }, a sala tem um tempo restante de ${this.tempoRestante} e a sala é ${this.salas}`);
}
}
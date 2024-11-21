class Jogador {
    constructor (nome,vida, cor, papel)

{
    this.nome = nome
    this.vida = vida
    this.cor = cor
    this.papel = papel
}

seApresentar(){
    console.log(`olá, meu nome é ${this.nome }, tenho ${this.vida} minha cor é  ${this.cor} e meu papel é ${this.papel}`);
}
}
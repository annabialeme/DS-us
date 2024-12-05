class Aluno { // classe aluno
    #senha;
    constructor(grupo, nome, apelido, senha) { // aqui estamos criando um Aluno com esses atributos
      this.grupo = this.validarGrupo(grupo);
      this.nome = this.validarNome(nome);
      this.apelido = this.validarApelidoNaoNulo(apelido);
      this.#senha = this.validarSenha(senha);
      this.estaVivo = true;
      this.localAtual = "Portaria do SENAI";
    }
  
    validarNome(nome) {    // aqui estamos validando se o nome é um string e não contem números
      if (!nome || typeof nome !== "string" || nome.match(/[^a-zA-Z]/)) {
        throw new Error(
          "Campo --nome-- inválido. Ele deve ser uma string e não conter números!"
        );
      }
      return nome; // aqui retornamos oo nome para o usuário
    }
  
    validarGrupo(grupo) { // aqui estamos validando se o grupo é um número 
      if (!Number.isInteger(grupo) || grupo < 1 || grupo > 6) {
        throw new Error(
          "Campo --grupo-- é obrigatório e deve ser um número de 1 a 6!"
        );
      }
      return grupo; // aqui retornamos o grupo para o usuário
    }
  
    validarApelidoNaoNulo(apelido) { // aqui estamos verificando se o apelido não é nulo ou seja não existe
      if (!apelido) {
        throw new Error("Campo --apelido-- é obrigatório!");
      }
      return apelido; // retornamos o apelido para o usuário
    }
  
    validarSenha(senha) { // aqui estamos validando se a senha é uma string e contem letras e números
      if (!senha || typeof senha !== "string" || senha.match(/[^a-zA-Z0-9]/)) {
        throw new Error(
          "Campo --senha-- é obrigatório! Ela deve ser uma string podendo ter dígitos e letras."
        );
      }
      return senha; // retornamos a senha para o usuário
    }
  
    atualizarCampos({ grupo, nome, apelido, senha }) { // aqui estamos atualizando os campos do aluno
      if (grupo) {
        this.grupo = this.validarGrupo(grupo);
      }
      if (nome) {
        this.nome = this.validarNome(nome);
      }
      if (apelido) {
        this.apelido = this.validarApelidoNaoNulo(apelido);
      }
      if (senha) {
        this.#senha = this.validarSenha(senha);
      }
    }
  
    pegarSenha() {
      return this.#senha; // aqui estamos retornando a senha mas não para o usuário pois é um atributo privado
    }
  }
  
  export default Aluno; // aqui estamos exportando a classe aluno para ser usada em outros arquivos
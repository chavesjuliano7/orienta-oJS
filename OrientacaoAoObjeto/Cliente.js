export class Cliente {
    nome;
    _cpf;

    constructor (nome, cpf) {
        this.nome = nome
        this._cpf = cpf
    }//fim do Constructor
    
    
    get cpf () {
        return this._cpf
    }//fim do Get CPF
    


}//fim da Classe Cliente

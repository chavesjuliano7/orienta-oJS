import { Cliente } from './Cliente.js'


export class ContaCorrente {

    /* 0 - Atributos STATIC são apenas acessiveis chamando a class que lhe pertecem, ou seja?
    ContaCorrente.Numero de contas
    
    1- AQUI FICARAO OS ATRIBUTOS PUBLICO
    atributos, propriedades
    atributos sem o underscore são atributos publicos.    
    ************************* 

    2 - AQUI ATRIBUTOS PRIVADOS
    atributos que contenha underscore são atribusto privados.
    ************************* 

    3 AQUI FICARA OS SET E GET DA CLASS
    foi utilizado a variavel cliente, mas não interfere na vairavel privada cliente
    ************************* 

    4 AQUI ESTÃO OS METODOS E COMPORTAMENTOS 
    ************************* */

    //FIXME: 0 
    static numeroDeContas = 0;

   // FIXME: 1 
    agencia;
    
    //FIXME: 2
    _cliente;
    _saldo = 0;


    //FIXME: 3
    set cliente(novoCliente) {

        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente

        }//fim do IF
    }//fim do set cliente

    get cliente() {
        return this._cliente
    }//fim do get cliente

    get saldo() {
        return this._saldo;
    }//fim do get saldo


    constructor (agencia, cliente ){
        this.agencia = agencia;
        this.cliente = cliente   /*Foi utilizado o acessor set cliente sem 
        precisar adicionar direto no atributo privado. Fazendo assim, 
        o acessor verifica se o cliente e um objeto.*/

        ContaCorrente.numeroDeContas += 1;  /*O numero de conta se refere a
         um atributo estatico da conta, ou seja, so posso acessar 
         utilizando o objeto conta, neste caso eu estou incrementando 
         a total de contas abertas. */

    }



    //FIXME: 4 

    //metodos, comportamento
    sacar(valor) {

        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        } // fim dos if   
    } // fim do sacar 

    depositar(valor) {

        if (valor <= 0) {
            return this._saldo += valor
        } //fim do if
    } // fim do depositar

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }// fim do transferir

}//fim da Class ContaCorrente 


import { Cliente }       from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1     = new Cliente("Ricardo", 11122233309 );
const contaRicardo = new ContaCorrente(1001, cliente1);

const cliente2   = new Cliente("Alice", 88822233309);
const contaAlice = new ContaCorrente(1002, cliente2);

contaRicardo.depositar(500);

let valor = 200
contaRicardo.transferir(valor, contaAlice)


console.log(ContaCorrente.numeroDeContas);


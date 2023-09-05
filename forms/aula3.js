var nome 
var email 
var num = 0 
var saldo = 1000
var saque = 0
var deposito = 0

function sacar(saque){
    saldo = saldo - saque
    return saldo
}

function depositar(deposito){
    saldo = saldo + deposito
    return saldo
}

function escrever(quadro){
    info = "Usuário número " + (++num) + "\n";
    info += "Nome " + nome + "\n";
    info += "E-mail " + email + "\n";
    info += "Saldo " + sacar(saque) + "\n \n";
    quadro.value += info;
}

function limpar(){
    document.getElementById("Area").value = '';
}
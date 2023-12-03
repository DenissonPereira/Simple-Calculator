var display = document.getElementsByClassName('tela_numeros')[0];
var tela = parseFloat(display.textContent);
var numero_1 = parseInt(1);
var numero_2 = parseInt(2);
var numero_3 = parseInt(3);
var numero_4 = parseInt(4);
var numero_5 = parseInt(5);
var numero_6 = parseInt(6);
var numero_7 = parseInt(7);
var numero_8 = parseInt(8);
var numero_9 = parseInt(9);
var numero_0 = parseInt(0);

function um() {
    display.textContent = display.textContent + '1';
}

function dois() {
    display.textContent = display.textContent + '2';
}

function tres() {
    display.textContent = display.textContent + '3';
}

function quatro() {
    display.textContent = display.textContent + '4';
}

function cinco() {
    display.textContent = display.textContent + '5';
}

function seis() {
    display.textContent = display.textContent + '6';
}

function sete() {
    display.textContent = display.textContent + '7';
}

function oito() {
    display.textContent = display.textContent + '8';
}

function nove() {
    display.textContent = display.textContent + '9';
}

function zero() {
    display.textContent = display.textContent + '0';
}

function soma() {
    display.textContent = display.textContent + ' + ';
}

function subtracao() {
    display.textContent = display.textContent + ' - ';
}

function divisao() {
    display.textContent = display.textContent + ' / ';
}

function vezes() {
    display.textContent = display.textContent + ' * ';
}

function igual(){
    display.textContent = eval(display.textContent);
}

function ponto() {
    display.textContent = display.textContent + '.';
}

function C() {
    display.textContent = '';
}

function troca_sinal() {
    if (parseFloat(display.textContent) < 0) {
        display.textContent = eval(-display.textContent);
    } else {
        display.textContent = '-' + display.textContent;
    }
}

function raiz() {
    var c_raiz = (parseFloat(display.textContent))**(1/2);
    display.textContent = c_raiz;
}

function porcentagem() {
    display.textContent = eval((display.textContent) / 100);
}
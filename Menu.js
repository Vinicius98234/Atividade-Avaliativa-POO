// QUESTÃO 1
var ItemMenu = /** @class */ (function () {
    function ItemMenu(opcao, textoDaOpcao) {
        this.opcao = opcao;
        this.textoDaOpcao = textoDaOpcao;
    }
    ItemMenu.prototype.getOpcao = function () {
        return this.opcao;
    };
    ItemMenu.prototype.getTextoDaOpcao = function () {
        return this.textoDaOpcao;
    };
    return ItemMenu;
}());
var Menu = /** @class */ (function () {
    function Menu() {
        this.itens = [];
        var op1 = new ItemMenu("1", "Atacar");
        this.itens.push(op1);
        var op2 = new ItemMenu("2", "Ataque especial");
        this.itens.push(op2);
        var op3 = new ItemMenu("3", "Tomar poção de Cura de HP");
        this.itens.push(op3);
        var op4 = new ItemMenu("4", "Tomar poção que restaura MP");
        this.itens.push(op4);
        var op5 = new ItemMenu("5", "Defender");
        this.itens.push(op5);
    }
    Menu.prototype.imprimirMenu = function () {
        console.log("Menu");
        this.itens.forEach(function (item) {
            console.log("".concat(item.getOpcao(), " - ").concat(item.getTextoDaOpcao()));
        });
        var prompt = require('prompt-sync')();
        var opc = prompt("Selecione a opção: ");
        return opc;
    };
    return Menu;
}());
// QUESTÃO 2
var Coliseu = /** @class */ (function () {
    function Coliseu() {
    }
    return Coliseu;
}());
// QUESTÃO 3
var Monstro = /** @class */ (function () {
    function Monstro() {
    }
    // Letra B
    Monstro.prototype.receberDano = function () {
    };
    // Letra A
    Monstro.prototype.if = function () {
    };
    return Monstro;
}());
var menu = new Menu();
menu.imprimirMenu();

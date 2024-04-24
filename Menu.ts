// QUESTÃO 1
class ItemMenu {
    private opcao:string;
    private textoDaOpcao:string;

    constructor(opcao:string , textoDaOpcao:string){
        this.opcao = opcao;
        this.textoDaOpcao = textoDaOpcao
    }
    getOpcao():string{
        return this.opcao
    }
    getTextoDaOpcao(){
        return this.textoDaOpcao;
    }
}  

class Menu {

    private itens: ItemMenu[] = [];

    constructor(){
        let op1 = new ItemMenu("1", "Atacar")
        this.itens.push(op1)
        let op2 = new ItemMenu("2" , "Ataque especial")
        this.itens.push(op2)
        let op3 = new ItemMenu("3" , "Tomar poção de Cura de HP")
        this.itens.push(op3)
        let op4 = new ItemMenu("4" , "Tomar poção que restaura MP")
        this.itens.push(op4)
        let op5 = new ItemMenu("5" , "Defender")
        this.itens.push(op5)
    }
    imprimirMenu(){
        console.log("Menu")
        this.itens.forEach(item => {
            console.log(`${item.getOpcao()} - ${item.getTextoDaOpcao()}`)
        });
        var prompt = require('prompt-sync')();
        let opc = prompt("Selecione a opção: ")
        return opc;
    }

}
// QUESTÃO 2
class Coliseu {
    monstro:string;
}
// QUESTÃO 3
class Monstro {
    hp:number;
    forcadeatk:number;
    forcadedef:number;
    // Letra B
    receberDano(){
        
    }
    // Letra A
    if (){

    }
}
let menu = new Menu();

menu.imprimirMenu();

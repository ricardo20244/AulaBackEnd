class Caneta {
    cor = "azul";
    vazia = false;

    constructor(cor){
        this.cor = cor;
    }

    escrever(){
console.log("escreveu bastante");
    }
}


var bic1 = new Caneta("preto");
var bic2 = new Caneta("vermelho");
var bic3 = new Caneta("rosa");
var bic4 = bic3;

bic2.cor = "preta";
bic4.cor = "vermelha";

console.log(bic1, bic2, bic3, bic4);

if (bic1 == bic2)
    {
console.log("verdadeiro");
    } else{
        console.log("falso");
    }
     
var numero = 2;
var palavra = 'a';
numero += 5; //let pode ser reatribuido, mas não pode ser instanciado novamente
//palavra += '2'; const = final do java
var booleano = false;
var qualquer = '312312' + 2 + true;
var objeto = {
    "oi": 2
};
var nome;
function criarNome(name) {
    if (typeof name == "string")
        return name;
    else
        return name.join(" ");
}
var mensagem = "Ol\u00E1, " + criarNome(["Robinson", "Luiz"]);
// alert(mensagem);

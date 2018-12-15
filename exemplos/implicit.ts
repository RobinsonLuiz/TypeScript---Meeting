let numero: number = 2;
const palavra: string = 'a';

numero += 5; //let pode ser reatribuido, mas não pode ser instanciado novamente
//palavra += '2'; const = final do java

let booleano: boolean = false;
let qualquer: any = '312312' + 2 + true;
let objeto: object = {
    "oi": 2
};

// let html: HTMLInputElement;
// html.querySelector('teste'); atribuido para receber os parametros do front

//type definitions
type nomeOrnomeArray = string | Array<string>;
let nome: string | number;
function criarNome(name: nomeOrnomeArray) {
    if (typeof name == "string") return name;
    else return name.join(" ");
}

let mensagem = `Olá, ${ criarNome(["Robinson", "Luiz"]) }`;
// alert(mensagem);



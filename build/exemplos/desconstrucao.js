var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
//desconstrução de vetores
var meuArray = [1, 2, 3, 4];
// let primeiro = meuArray[0];
var primeiro = meuArray[0], segundo = meuArray[1];
// let [, , , ultimo] = meuArray;
var outroPrimeiro = meuArray[0], ultimo = meuArray[3];
var ultimoPrimeiro = meuArray[0], outroArray = meuArray.slice(1);
// alert(`Primeira Desconstrução valor - ${primeiro}`);
// alert(`Primeira Desconstrução valor - ${segundo}`);
// alert(`Segunda Desconstrução valor - ${outroPrimeiro}`);
// alert(`Segunda Desconstrução valor - ${ultimo}`);
// alert(`Terceira Desconstrução valor - ${ultimoPrimeiro}`);
// alert(`Terceira Desconstrução valor - ${JSON.stringify(outroArray)}`);
//desconstrução de objetos
var meuObjeto = {
    id: 1,
    idade: 24,
    nome: 'Robinson',
    cargo: 'Dev'
};
var id = meuObjeto.id;
var idt = meuObjeto.idt; //undefined
// alert(`Primeira Desconstrução - ${nome} e id ${id}`);
// alert(idt);
var segundoObjeto = {
    id: 2,
    idade: 22,
    cliente: 'Evandro',
    cargo: 'Container'
};
var cliente = segundoObjeto.cliente, outroObjeto = __rest(segundoObjeto, ["cliente"]);
// alert(`Segunda Desconstrução - ${cliente} e ${JSON.stringify(outroObjeto)}`);

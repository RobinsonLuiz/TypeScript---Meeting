//desconstrução de vetores
let meuArray = [1, 2, 3, 4];



// let primeiro = meuArray[0];
let [primeiro, segundo] = meuArray;
// let [, , , ultimo] = meuArray;
let [outroPrimeiro, , , ultimo] = meuArray;
let [ultimoPrimeiro, ...outroArray] = meuArray;


// alert(`Primeira Desconstrução valor - ${primeiro}`);
// alert(`Primeira Desconstrução valor - ${segundo}`);
// alert(`Segunda Desconstrução valor - ${outroPrimeiro}`);
// alert(`Segunda Desconstrução valor - ${ultimo}`);
// alert(`Terceira Desconstrução valor - ${ultimoPrimeiro}`);
// alert(`Terceira Desconstrução valor - ${JSON.stringify(outroArray)}`);


//desconstrução de objetos

let meuObjeto: any = {
    id: 1,
    idade: 24,
    nome: 'Robinson',
    cargo: 'Dev'
};

let { id } = meuObjeto;
let { idt } = meuObjeto; //undefined

// alert(`Primeira Desconstrução - ${nome} e id ${id}`);
// alert(idt);

let segundoObjeto: any = {
    id: 2,
    idade: 22,
    cliente: 'Evandro',
    cargo: 'Container'
};


let { cliente, ...outroObjeto } = segundoObjeto;

// alert(`Segunda Desconstrução - ${cliente} e ${JSON.stringify(outroObjeto)}`);
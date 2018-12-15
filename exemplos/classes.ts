




interface IDAO<TYPE extends AbstractModel> {

    persiste(objeto: TYPE): any;
    delete(email: string): any;
    deleteId(id: number): any;
    select(dados: string): Map<string, TYPE>;
    
}

class AbstractModel {
    
    private _id: any;


    constructor() {}
    
    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }
}

class Eletronicos extends AbstractModel {

    private _fabricante: string;
    private _modelo: string;

    
    get fabricante() {
        return this._fabricante;
    }

    get modelo() {
        return this._modelo;
    }

    set fabricante(fabricante: string) {
        this._fabricante = fabricante;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }
}


class Computador extends Eletronicos {

    private _ano: number;

    get ano() {
        return this._ano;
    }

    set ano(ano: number) {
        this._ano = ano;
    }

    toString() {
        return `Computador ${this.modelo} - ${this.fabricante} Ano Fabricado - ${this.ano}`;
    }
}

function generateCpu(id: number, ano: number, fabricante: string, modelo: string): Computador {
    let computador = new Computador();
    computador.id = id;
    computador.ano = ano;
    computador.fabricante = fabricante;
    computador.modelo = modelo;
    return computador;
}

let computadores: Array<Computador> = new Array<Computador>();
computadores[0] = generateCpu(1, 2017, 'samsung', 'i5 muito massa');
computadores[1] = generateCpu(2, 2018, 'dell', 'i7 muito massa');
computadores[2] = generateCpu(3, 2019, 'apple', 'maczao da massa');


class ComputadorDAO implements IDAO<Computador> {

    public persiste(objeto: Computador) {
        return "OK";
    }

    public delete(modelo: string) {
        return `excluido - ${modelo}`;
    }

    public deleteId(id: number) {
        for (let i = 0; i < computadores.length; i++) {
            if (computadores[i].id == id) return `o computador ${computadores[i]} com id ${id} foi deletado`;
        }
        return `id ${id} não foi achado`;
    }

    public select(dados: string): Map<string, Computador> {
        let map = new Map<string, Computador>();
        computadores.forEach(computador => {
            if (computador.fabricante == dados) map.set(computador.fabricante, computador); 
        });
        return map;
    }
}

let computadorDAO = new ComputadorDAO();
alert(computadorDAO.delete("robinsontads@outlook.com"));
alert(computadorDAO.deleteId(2));
computadorDAO.select("apple").forEach(computador => alert(computador));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractModel = /** @class */ (function () {
    function AbstractModel() {
    }
    Object.defineProperty(AbstractModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractModel;
}());
var Eletronicos = /** @class */ (function (_super) {
    __extends(Eletronicos, _super);
    function Eletronicos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Eletronicos.prototype, "fabricante", {
        get: function () {
            return this._fabricante;
        },
        set: function (fabricante) {
            this._fabricante = fabricante;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eletronicos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: true,
        configurable: true
    });
    return Eletronicos;
}(AbstractModel));
var Computador = /** @class */ (function (_super) {
    __extends(Computador, _super);
    function Computador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Computador.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            this._ano = ano;
        },
        enumerable: true,
        configurable: true
    });
    Computador.prototype.toString = function () {
        return "Computador " + this.modelo + " - " + this.fabricante + " Ano Fabricado - " + this.ano;
    };
    return Computador;
}(Eletronicos));
function generateCpu(id, ano, fabricante, modelo) {
    var computador = new Computador();
    computador.id = id;
    computador.ano = ano;
    computador.fabricante = fabricante;
    computador.modelo = modelo;
    return computador;
}
var computadores = new Array();
computadores[0] = generateCpu(1, 2017, 'samsung', 'i5 muito massa');
computadores[1] = generateCpu(2, 2018, 'dell', 'i7 muito massa');
computadores[2] = generateCpu(3, 2019, 'apple', 'maczao da massa');
var ComputadorDAO = /** @class */ (function () {
    function ComputadorDAO() {
    }
    ComputadorDAO.prototype.persiste = function (objeto) {
        return "OK";
    };
    ComputadorDAO.prototype.delete = function (modelo) {
        return "excluido - " + modelo;
    };
    ComputadorDAO.prototype.deleteId = function (id) {
        for (var i = 0; i < computadores.length; i++) {
            if (computadores[i].id == id)
                return "o computador " + computadores[i] + " com id " + id + " foi deletado";
        }
        return "id " + id + " n\u00E3o foi achado";
    };
    ComputadorDAO.prototype.select = function (dados) {
        var map = new Map();
        computadores.forEach(function (computador) {
            if (computador.fabricante == dados)
                map.set(computador.fabricante, computador);
        });
        return map;
    };
    return ComputadorDAO;
}());
var computadorDAO = new ComputadorDAO();
// alert(computadorDAO.delete("robinsontads@outlook.com"));
// alert(computadorDAO.deleteId(2));
// computadorDAO.select("apple").forEach(computador => alert(computador));

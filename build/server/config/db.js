"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Database = /** @class */ (function () {
    function Database() {
        this.DB_URL = 'mongodb://127.0.0.1/ts-rest-api';
    }
    Database.prototype.createConnection = function () {
        mongoose.set('useCreateIndex', true);
        mongoose.connect(this.DB_URL, { useNewUrlParser: true });
        this.logger(this.DB_URL);
    };
    Database.prototype.logger = function (uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', function () {
            console.log("Conectado ao banco de dados " + uri);
        });
        this.DB_CONNECTION.on('error', function (error) {
            console.log("Erro na conex\u00E3o para o banco de dados " + uri + " - " + error);
        });
        this.DB_CONNECTION.on('disconnected', function (error) {
            console.log("Desconectado " + uri);
        });
    };
    Database.prototype.closeConnection = function (message, callback) {
        this.DB_CONNECTION.close(function () {
            console.log("Fechou a conexão");
            callback();
        });
    };
    return Database;
}());
exports.default = Database;

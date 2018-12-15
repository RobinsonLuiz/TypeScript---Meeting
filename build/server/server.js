"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
app_1.default.app.listen(5000, function () { return console.log("Servidor rodando na 5000"); });
process.once('SIGUSR2', function () { return app_1.default.closeDataBaseConnection('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
}); });
process.once('SIGINT', function () { return app_1.default.closeDataBaseConnection('conexão interrompida', function () {
    process.exit(0);
}); });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var db_1 = require("./config/db");
var routes_1 = require("./modules/user/routes");
var routes_2 = require("./modules/product/routes");
var App = /** @class */ (function () {
    function App() {
        this._app = express();
        this.middleware();
        this.routes();
        this._database = new db_1.default();
        this.dataBaseConnection();
    }
    App.prototype.dataBaseConnection = function () {
        this._database.createConnection();
    };
    App.prototype.closeDataBaseConnection = function (message, callback) {
        this._database.closeConnection(message, callback);
    };
    App.prototype.middleware = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) { return res.status(200).json({ "message": "Hello World" }); });
        new routes_1.default(this.app);
        new routes_2.default(this.app);
    };
    Object.defineProperty(App.prototype, "app", {
        get: function () {
            return this._app;
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
exports.default = new App();

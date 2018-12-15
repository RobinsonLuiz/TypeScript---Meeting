"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("./repository");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.getAll = function () {
        return repository_1.default.find({});
    };
    ProductController.prototype.getById = function (id) {
        return repository_1.default.findById(id);
    };
    ProductController.prototype.create = function (product) {
        return repository_1.default.create(product);
    };
    ProductController.prototype.update = function (id, product) {
        var updateProduct = {
            name: product.name,
            valor: product.valor,
            descricao: product.descricao
        };
        return repository_1.default.findByIdAndUpdate(id, updateProduct);
    };
    ProductController.prototype.delete = function (id) {
        return repository_1.default.remove(id);
    };
    return ProductController;
}());
exports.default = new ProductController();

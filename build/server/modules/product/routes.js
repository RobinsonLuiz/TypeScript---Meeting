"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var httpStatus = require("http-status");
var sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
var ProductRoutes = /** @class */ (function () {
    function ProductRoutes(app) {
        this.getRoutes(app);
    }
    ProductRoutes.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, controller_1.default.getAll()];
                    case 1:
                        response = _a.sent();
                        if (response)
                            sendResponse(res, httpStatus.OK, response);
                        else
                            sendResponse(res, httpStatus.OK, "Nenhum Produto encontrado");
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        sendResponse(res, httpStatus.OK, "Problema ao buscar produtos");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductRoutes.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = { _id: req.params.id };
                        if (!!id) return [3 /*break*/, 1];
                        sendResponse(res, httpStatus.OK, 'Produto não foi encontrado');
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, controller_1.default.getById(id)];
                    case 2:
                        response = _a.sent();
                        if (response)
                            sendResponse(res, httpStatus.OK, response);
                        else
                            sendResponse(res, httpStatus.OK, "Produto não encontrado");
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao buscar produtos : " + err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductRoutes.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, created, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user = req.body;
                        return [4 /*yield*/, controller_1.default.create(user)];
                    case 1:
                        created = _a.sent();
                        if (created)
                            sendResponse(res, httpStatus.CREATED, "Produto criado com sucesso");
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao criar o produto");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductRoutes.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, updateProduct, updated, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = { _id: req.params.id };
                        updateProduct = req.body;
                        if (!!id) return [3 /*break*/, 1];
                        sendResponse(res, httpStatus.OK, 'Produto não foi encontrado');
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, controller_1.default.update(id, updateProduct)];
                    case 2:
                        updated = _a.sent();
                        if (updated)
                            sendResponse(res, httpStatus.OK, "Produto atualizado");
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao atualizar o produto");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductRoutes.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleted, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = { _id: req.params.id };
                        if (!!id) return [3 /*break*/, 1];
                        sendResponse(res, httpStatus.OK, 'Produto não foi encontrado');
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, controller_1.default.delete(id)];
                    case 2:
                        deleted = _a.sent();
                        if (deleted)
                            sendResponse(res, httpStatus.OK, "Produto deletado com sucesso");
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao excluir o produto");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductRoutes.prototype.getRoutes = function (app) {
        app.route('/api/v1/products').get(this.getAll);
        app.route('/api/v1/products/:id').get(this.getById);
        app.route('/api/v1/products').post(this.create);
        app.route('/api/v1/products/:id').put(this.update);
        app.route('/api/v1/products/:id').delete(this.delete);
    };
    return ProductRoutes;
}());
exports.default = ProductRoutes;

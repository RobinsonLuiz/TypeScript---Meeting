"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    valor: { type: Number, required: true },
    descricao: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = ProductSchema;

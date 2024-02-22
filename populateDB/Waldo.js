"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waldo = void 0;
var mongoose_1 = require("mongoose");
var waldoSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    minX: { type: Number, required: true },
    minY: { type: Number, required: true },
    maxX: { type: Number, required: true },
    maxY: { type: Number, required: true },
});
exports.Waldo = (0, mongoose_1.model)('Waldo', waldoSchema);

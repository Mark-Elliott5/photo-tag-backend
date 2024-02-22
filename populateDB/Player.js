"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var mongoose_1 = require("mongoose");
var playerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    time: { type: Number, required: true },
    userId: { type: String, required: true },
});
exports.Player = (0, mongoose_1.model)('Player', playerSchema);

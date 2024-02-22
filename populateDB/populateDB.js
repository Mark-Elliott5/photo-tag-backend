#!/usr/bin/env node */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var mongoose_1 = require("mongoose");
var Waldo_1 = require("./Waldo");
var Player_1 = require("./Player");
console.log('Populating the designated MongoDB database with the provided data...');
mongoose_1.default.set('strictQuery', false);
var mongoDB = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : '';
function waldoCreator(waldoData) {
    return __awaiter(this, void 0, void 0, function () {
        var waldo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    waldo = new Waldo_1.Waldo(waldoData);
                    return [4 /*yield*/, waldo.save()];
                case 1:
                    _a.sent();
                    console.log("Added item: ".concat(waldoData.name));
                    return [2 /*return*/];
            }
        });
    });
}
function createAllWaldos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Adding articles');
                    return [4 /*yield*/, Promise.all([
                            waldoCreator({
                                name: 'Aang',
                                minX: 81,
                                minY: 30,
                                maxX: 85,
                                maxY: 33,
                            }),
                            waldoCreator({
                                name: 'G-Man',
                                minX: 24,
                                minY: 68,
                                maxX: 29,
                                maxY: 69,
                            }),
                            waldoCreator({
                                name: 'Ice King',
                                minX: 2,
                                minY: 8,
                                maxX: 6,
                                maxY: 11,
                            }),
                            waldoCreator({
                                name: 'Mikasa',
                                minX: 9,
                                minY: 88,
                                maxX: 13,
                                maxY: 94,
                            }),
                            waldoCreator({
                                name: 'Ghostface',
                                minX: 95,
                                minY: 53,
                                maxX: 99,
                                maxY: 60,
                            }),
                            waldoCreator({
                                name: 'Togemon',
                                minX: 72,
                                minY: 34,
                                maxX: 78,
                                maxY: 37,
                            }),
                            waldoCreator({
                                name: 'Max Headroom',
                                minX: 73,
                                minY: 40,
                                maxX: 78,
                                maxY: 44,
                            }),
                            waldoCreator({
                                name: 'Old Snake',
                                minX: 49,
                                minY: 18,
                                maxX: 54,
                                maxY: 21,
                            }),
                            waldoCreator({
                                name: 'Reze',
                                minX: 44,
                                minY: 19,
                                maxX: 49,
                                maxY: 24,
                            }),
                            waldoCreator({
                                name: 'Phoenix Wright',
                                minX: 48,
                                minY: 23,
                                maxX: 53,
                                maxY: 29,
                            }),
                            waldoCreator({
                                name: 'Fry',
                                minX: 4,
                                minY: 10,
                                maxX: 8,
                                maxY: 13,
                            }),
                            waldoCreator({
                                name: 'Adam Jensen',
                                minX: 4,
                                minY: 13,
                                maxX: 9,
                                maxY: 18,
                            }),
                            waldoCreator({
                                name: 'Yoshimitsu',
                                minX: 55,
                                minY: 44,
                                maxX: 61,
                                maxY: 48,
                            }),
                            waldoCreator({
                                name: 'Hank Hill',
                                minX: 5,
                                minY: 33,
                                maxX: 10,
                                maxY: 37,
                            }),
                            waldoCreator({
                                name: 'Skull Knight',
                                minX: 15,
                                minY: 39,
                                maxX: 20,
                                maxY: 42,
                            }),
                            waldoCreator({
                                name: 'Jetstream Sam',
                                minX: 50,
                                minY: 53,
                                maxX: 56,
                                maxY: 58,
                            }),
                            waldoCreator({
                                name: 'Afro Samurai',
                                minX: 62,
                                minY: 50,
                                maxX: 68,
                                maxY: 57,
                            }),
                            waldoCreator({
                                name: 'The Dude',
                                minX: 34,
                                minY: 61,
                                maxX: 39,
                                maxY: 66,
                            }),
                            waldoCreator({
                                name: 'Chun Li',
                                minX: 9,
                                minY: 58,
                                maxX: 13,
                                maxY: 62,
                            }),
                            waldoCreator({
                                name: 'Isaac Clarke',
                                minX: 48,
                                minY: 81,
                                maxX: 54,
                                maxY: 88,
                            }),
                            waldoCreator({
                                name: 'Mr. X',
                                minX: 2,
                                minY: 91,
                                maxX: 10,
                                maxY: 99,
                            }),
                            waldoCreator({
                                name: 'Vash',
                                minX: 10,
                                minY: 78,
                                maxX: 23,
                                maxY: 82,
                            }),
                            waldoCreator({
                                name: 'Raiden',
                                minX: 14,
                                minY: 72,
                                maxX: 20,
                                maxY: 78,
                            }),
                            waldoCreator({
                                name: 'Gollum',
                                minX: 35,
                                minY: 72,
                                maxX: 42,
                                maxY: 75,
                            }),
                            waldoCreator({
                                name: 'Tintin',
                                minX: 43,
                                minY: 68,
                                maxX: 49,
                                maxY: 72,
                            }),
                            waldoCreator({
                                name: 'Goose',
                                minX: 71,
                                minY: 55,
                                maxX: 76,
                                maxY: 58,
                            }),
                            waldoCreator({
                                name: 'Lupin The Third',
                                minX: 66,
                                minY: 75,
                                maxX: 70,
                                maxY: 81,
                            }),
                            waldoCreator({
                                name: "Captain K'nuckles",
                                minX: 66,
                                minY: 18,
                                maxX: 69,
                                maxY: 21,
                            }),
                            waldoCreator({
                                name: 'Lady Dimitrescu',
                                minX: 81,
                                minY: 66,
                                maxX: 92,
                                maxY: 73,
                            }),
                            waldoCreator({
                                name: 'Deadpool',
                                minX: 92,
                                minY: 92,
                                maxX: 97,
                                maxY: 98,
                            }),
                            waldoCreator({
                                name: 'Rocko',
                                minX: 65,
                                minY: 68,
                                maxX: 69,
                                maxY: 70,
                            }),
                            waldoCreator({
                                name: 'Skeletor',
                                minX: 91,
                                minY: 87,
                                maxX: 97,
                                maxY: 92,
                            }),
                            waldoCreator({
                                name: 'Invader Zim',
                                minX: 84,
                                minY: 11,
                                maxX: 88,
                                maxY: 12,
                            }),
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function playerCreator(playerData) {
    return __awaiter(this, void 0, void 0, function () {
        var player;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    player = new Player_1.Player(playerData);
                    return [4 /*yield*/, player.save()];
                case 1:
                    _a.sent();
                    console.log("Added item: ".concat(playerData.name));
                    return [2 /*return*/];
            }
        });
    });
}
function createAllPlayers() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Adding articles');
                    return [4 /*yield*/, Promise.all([
                            playerCreator({
                                name: 'Aang',
                                time: 60000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'G-Man',
                                time: 90000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Ice King',
                                time: 120000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Mikasa',
                                time: 150000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Ghostface',
                                time: 180000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Togemon',
                                time: 210000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Max Headroom',
                                time: 240000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Old Snake',
                                time: 270000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Reze',
                                time: 300000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Phoenix Wright',
                                time: 330000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Fry',
                                time: 360000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Adam Jensen',
                                time: 390000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Yoshimitsu',
                                time: 420000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Hank Hill',
                                time: 450000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Skull Knight',
                                time: 480000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Jetstream Sam',
                                time: 510000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Afro Samurai',
                                time: 540000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'The Dude',
                                time: 570000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Chun Li',
                                time: 600000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Isaac Clarke',
                                time: 630000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Mr. X',
                                time: 660000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Vash',
                                time: 690000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Raiden MK',
                                time: 720000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Gollum',
                                time: 750000,
                                userId: 'null',
                            }),
                            playerCreator({
                                name: 'Tintin',
                                time: 780000,
                                userId: 'null',
                            }),
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Debug: About to connect');
                    return [4 /*yield*/, mongoose_1.default.connect(mongoDB)];
                case 1:
                    _a.sent();
                    console.log('Debug: Connected');
                    console.log('Creating Waldos');
                    return [4 /*yield*/, createAllWaldos()];
                case 2:
                    _a.sent();
                    console.log('Creating Players for leaderboard');
                    return [4 /*yield*/, createAllPlayers()];
                case 3:
                    _a.sent();
                    console.log('Debug: Closing mongoose');
                    mongoose_1.default.connection.close();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) { return console.log(err); });

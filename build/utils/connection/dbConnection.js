"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = process.env.MONGO_URI;
module.exports = () => {
    mongoose_1.default.connect(URI, (err) => {
        if (err)
            console.log(err);
        console.log("connected to MongoDB");
    });
};

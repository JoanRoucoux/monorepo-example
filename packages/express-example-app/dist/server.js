"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.use((_req, res, next) => {
    // Allow any website to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Continue to next middleware
    next();
});
app.get("/data", (req, res) => {
    res.json({ value: "my awesome data" });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

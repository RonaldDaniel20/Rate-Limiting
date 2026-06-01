"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./Routes/routes"));
const conection_1 = __importDefault(require("./database/conection"));
const scripdb_1 = __importDefault(require("./database/scripdb"));
require('dotenv').config();
const PORT = process.env.PORT || 3001;
// Crear una instancia de Express
const app = (0, express_1.default)();
// Establecer conexión a la base de datos
(0, conection_1.default)();
(0, scripdb_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
}));
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    return console.log(`Calificaciones Service is running on port ${PORT}`);
});

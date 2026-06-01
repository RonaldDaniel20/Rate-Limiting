import express from 'express';
import cors from 'cors';
import routes from './Routes/routes';
import db from './database/conection';
import addData from './database/scripdb';
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const API_FRONT = process.env.API_FRONT; 

// Crear una instancia de Express
const app = express();


// Establecer conexión a la base de datos
db();
addData();

console.log(API_FRONT);
app.use(express.json());
app.use(cors({
    origin: API_FRONT, 
}));
app.use('/api', routes);



app.listen(PORT, () => {
    return console.log(`Calificaciones Service is running on port ${PORT}`);
})


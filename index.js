require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware para JSON
app.use(express.json());

// Configuración de CORS
app.use(cors({
    origin: ['http://127.0.0.1:5500'], // frontend permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // agregué PUT y DELETE
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rutas
const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});

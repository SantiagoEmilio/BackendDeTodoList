require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

// Lista de orígenes permitidos
const allowedOrigins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://santiagoemilio.github.io" // GitHub Pages usa SOLO este dominio en Origin
];

// Configuración CORS
app.use(cors({
    origin: function (origin, callback) {
        // Permite requests sin origin (ej: Postman) o si está en la lista
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS: " + origin));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
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


require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
    origin: ['http://127.0.0.1:5500',
            "https://santiagoemilio.github.io/TodoListselp", 
    "https://santiagoemilio.github.io/TodoListselp/pages/dashboard"], // frontend permitido
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

const db = require('../../config/database');
const express = require('express');
const router = express.Router();

// Ruta para obtener todas las tareas
router.get('/tareas', async (req, res) => {
    try {
        let [todaslasTareas] = await db.query('SELECT * FROM tareas');
        res.json(todaslasTareas);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
});

module.exports = router;

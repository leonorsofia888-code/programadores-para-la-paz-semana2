const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

// GET - ver reportes
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// POST - crear reporte
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor ejecutándose en puerto 3000");
});
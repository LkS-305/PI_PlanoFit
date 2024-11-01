// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Define a pasta pública para servir os arquivos estáticos
app.use(express.static('public'));

// Rota principal para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
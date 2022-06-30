const express = require('express');
const app = require('./app');

app.use(express.json());
require('dotenv').config();
const toDoListController = require('./controller/toDoListController');

app.get('/toDoList', toDoListController.getAll);
app.get('/toDoList/:id', toDoListController.getById);
app.post('/toDoList/', toDoListController.registerNew);
app.put('/toDoList/:id', toDoListController.updateTarefa);
app.delete('/toDoList/:id', toDoListController.deleteTarefa);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

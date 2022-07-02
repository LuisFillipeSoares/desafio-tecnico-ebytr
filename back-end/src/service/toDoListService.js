const toDoListModel = require('../model/toDoListModel');
const error = require('../utils/erro');

const getAll = async () => {
  console.log("entrou no service teste")
  const result = await toDoListModel.getAll();
  return result;
};

const getById = async (id) => {
  const [result] = await toDoListModel.getById(id);
  if (!result) throw error.throwError(404, 'A tarefa não existe');
  return result;
};

const getByName = async (name) => {
  const [result] = await toDoListModel.getByname(name);
  if (!result) throw error.throwError(404, 'Tarefa não encontrada');
  return result;
};

const duplicate = async (name) => {
  const [results] = await toDoListModel.getByname(name);
  if (!results) return false;
  return true;
};

const newTarefa = async (name, status) => {
  // if (await duplicate(name)) throw error.throwError(409, 'A tarefa já existe');
  const product = await toDoListModel.newTarefa(name, status);
  return product;
};

const updateTarefa = async (id, name) => {
  const product = await toDoListModel.updateTarefa(id, name);
  return product;
};

const deleteTarefa = async (id) => {
  const product = await toDoListModel.deleteTarefa(id);
  return product;
};

module.exports = {
  getAll,
  getById,
  getByName,
  newTarefa,
  updateTarefa,
  deleteTarefa,
  duplicate,
};

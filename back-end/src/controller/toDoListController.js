const toDoListService = require('../service/toDoListService');

const getAll = async (_req, res, next) => {
  try {
    const allList = await toDoListService.getAll();
    return res.status(200).json(allList);
  } catch (erro) {
   next(erro); 
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const byId = await toDoListService.getById(id);
    return res.status(200).json(byId);
  } catch ({ code, message }) {
    res.status(code).json({ message });
    next(message);
  }
};

const registerNew = async (req, res, next) => {
  try {
    const { name } = req.body;
    const product = await toDoListService.newTarefa(name);
    return res.status(201).json(product);
  } catch ({ code, message }) {
    res.status(code).json({ message });
    next(message);
  }
};

const updateTarefa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const toDo = await toDoListService.updateProduct(id, name);
    return res.status(200).json(toDo);
  } catch ({ code, message }) {
    res.status(code).json({ message });
    next(message);
  }
};

const deleteTarefa = async (req, res, next) => {
  try {
    const { id } = req.params;
    await toDoListService.deleteTarefa(id);
    return res.status(204).end();
  } catch ({ code, message }) {
    res.status(code).json({ message });
    next(message);
  }
};

module.exports = {
  getAll,
  getById,
  registerNew,
  updateTarefa,
  deleteTarefa,
};
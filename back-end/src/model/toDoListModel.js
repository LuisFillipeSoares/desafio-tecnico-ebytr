const connection = require('./connection');

const getAll = async () => {
  console.log("entrou na model")
  const [result] = await connection.execute('SELECT * FROM ToDoList.tarefas ORDER BY id');
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM ToDoList.tarefas WHERE id=?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const getByname = async (name) => {
  const query = 'SELECT * ToDoList.tarefas WHERE name=?';
  const [result] = await connection.execute(query, [name]);
  return result;
};

const newTarefa = async (name) => {
  console.log("entrou na model no metodo new")
  const query = 'INSERT INTO ToDoList.tarefas (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  const tarefa = {
    id: result.insertId,
    name,
    status: result.status,
  };
  return tarefa;
};

const updateTarefa = async (idP, nome) => {
  const query = 'UPDATE ToDoList.tarefas SET name=?, WHERE id=?';
  await connection.execute(query, [nome, idP]);
  const tarefa = {
    id: idP,
    name: nome,
  };
  return tarefa;
};

const deleteTarefa = async (id) => {
  const query = 'DELETE FROM ToDoList.tarefas WHERE id=?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
  getByname,
  newTarefa,
  updateTarefa,
  deleteTarefa,
};

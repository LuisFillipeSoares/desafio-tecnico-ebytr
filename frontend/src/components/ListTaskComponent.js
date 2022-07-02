import React, { Component } from 'react'
import ToDoListService from './service/ToDoListService'
import AddTaskComponet from './AddTaskComponent'

class ListTaskComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    ToDoListService.deleteTask(id).then(id => {
      this.setState({ tasks: this.state.tasks.filter(employee => employee.id !== id) });
    });
    window.location.reload()
  }
  editTask(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  componentDidMount() {
    ToDoListService.getTasks()
      .then((res) => { this.setState({ tasks: res.data })});
  }

  render() {
    return (
      <div>
        <h2 className="text-center">tasks List</h2>
        <div className="row">
          <AddTaskComponet />
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">

            <thead>
              <tr>
                <th> Nome da Tarefa</th>
                <th> Status da Tarefa </th>
                <th> Data de Criação </th>
                <th> Ações </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.tasks.map(
                  employee =>
                    <tr key={employee.id}>
                      <td> {employee.name} </td>
                      <td> {employee.status}</td>
                      <td> {employee.created_at}</td>
                      <td>
                        <button onClick={() => this.editTask(employee.id)} className="btn btn-info">Atualizar </button>
                        <button style={{ marginLeft: "10px" }} onClick={() => this.deleteTask(employee.id)} className="btn btn-danger">Deletar </button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default ListTaskComponent
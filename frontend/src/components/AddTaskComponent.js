import React from 'react';
import ToDoListService from './service/ToDoListService'

export default class PersonList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      status: ''
    }

    this.addTask = this.addTask.bind(this);
  }


  addTask = name => {
    ToDoListService.createTask(name)
    window.location.reload()
  }

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ [target.name]: value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const name = {
      name: this.state.name,
      status: this.state.status,
    };
    console.log(name)
    this.addTask(name)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tarefa:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Status:
            <select value={this.state.value} onChange={this.handleChange} name="status">
              <option value="pendente">pendente</option>
              <option value="em andamento">em andamento</option>
              <option value="pronto">pronto</option>
            </select>
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    )
  }
}
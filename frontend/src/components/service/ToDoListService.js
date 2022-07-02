import axios from 'axios';

const TO_DO_LIST_API_BASE_URL = "http://localhost:3001/toDoList";

class ToDoListService {

  getTasks(){
    return axios.get(TO_DO_LIST_API_BASE_URL);
  }

  createTask(task){
    console.log("a task", TO_DO_LIST_API_BASE_URL, task)
    return axios.post(TO_DO_LIST_API_BASE_URL, task);
  }

  getTaskById(taskId){
    return axios.get(TO_DO_LIST_API_BASE_URL + '/' + taskId);
  }

  updateTask(task, taskId){
    return axios.put(TO_DO_LIST_API_BASE_URL + '/' + taskId, task);
  }

  deleteTask(taskId){
    return axios.delete(TO_DO_LIST_API_BASE_URL + '/' + taskId);
  }
}

export default new ToDoListService()
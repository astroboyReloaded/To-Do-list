// import { Edit } from "./addNRemove";

class ToDoList {
  constructor(db) {
    this.TaskList = JSON.parse(db) || [];
    this.ListContainer = document.getElementById('taskList');
    this.TaskInput = document.getElementById('task-input');
  }

  addNewItem() {
    this.TaskList.push({
      description: this.TaskInput.value,
      completed: false,
      index: this.TaskList.length,
    })
    this.saveToLS();
  }

  saveToLS() {
    localStorage.setItem('list', JSON.stringify(this.TaskList));
    this.render();
  }

  render() {
    this.ListContainer.innerHTML = this.TaskList.map((task) => (`
  <li id="taskIndex${task.index}" index=${task.index} class="task-item">
    <label
      id="checkIndex${task.index}"
      index=${task.index}
      class="checkContainer">
      <input class="checkbox" type="checkbox">
      <span class="check-btn"></span>
    </label>
    <p class="task-description ${task.completed && 'scratch'}">${task.description}
    </p>
    <input
      id="editIndex${task.index}"
      index=${task.index}
      class="edit-input hide"
      type="text">
    <button
      id="deleteBtnIndex${task.index}"
      index=${task.index}
      class="edit-icon delete-btn"></button>
  </li>
  `)).join('');
  }
}


export const List = new ToDoList(localStorage.getItem('list'));
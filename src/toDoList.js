import { Edit } from "./editor";

class ToDoList {
  constructor(db) {
    this.TaskList = JSON.parse(db) || [];
    this.ListContainer = document.getElementById('taskList');
    this.TaskInput = document.getElementById('task-input');
    this.clearCompletedBtn = document.getElementById('clear');
  }

  addNewItem() {
    this.TaskList.push({
      description: this.TaskInput.value,
      completed: false,
      index: this.TaskList.length + 1,
    })
    this.saveToLS();
    this.render();
    Edit.setControlls();
    this.TaskInput.value= '';
    this.TaskInput.focus();
  }
  
  clearAllCompleted() {
    this.TaskList = this.TaskList.filter((task) => !task.completed);
    Edit.setIndex();
    this.saveToLS();
    this.render();
    Edit.setControlls();
  }

  saveToLS() {
    localStorage.setItem('list', JSON.stringify(this.TaskList));
  }

  render() {
    this.ListContainer.innerHTML = this.TaskList.map((task) => (`
  <li id="taskIndex${task.index}" class="${task.index} task-item">
    <label
      id="checkIndex${task.index}"
      class="${task.index} checkContainer">
      <input
        class="${task.index} checkbox"
        type="checkbox" ${task.completed && 'checked'}>
      <span class="${task.index} check-btn"></span>
    </label>
    <input
      id="descriptionIndex${task.index}"
      class="task-description ${task.completed ? 'scratch' : ''}"
      value="${task.description}"
      readonly>
    <button
      class="${task.index} options-icon"
      type"button"></button>
    <button
      class="${task.index} delete-Task-Btn hide"
      type"button"></button>
  </li>
  `)).join('');
  }
}

export const List = new ToDoList(localStorage.getItem('list'));
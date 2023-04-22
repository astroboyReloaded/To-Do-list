class ToDoList {
  constructor(db) {
    this.TaskList = JSON.parse(db) || [];
    this.Restart = document.getElementById('restart-icon');
    this.Container = document.getElementById('taskList');
    this.TaskInput = document.getElementById('task-input');
    this.AddTaskBtn = document.getElementById('enter-btn');
    this.DeleteCompletedBtn = document.getElementById('clear');
  }

  addNewItem() {
    this.TaskList.push({
      description: this.TaskInput.value,
      completed: false,
      index: this.TaskList.length + 1,
    });
    this.TaskInput.value = '';
    this.TaskInput.focus();
  }

  deleteCompleted() {
    this.TaskList = this.TaskList.filter((task) => !task.completed);
  }

  restart() {
    this.TaskList = [];
  }

  setIndex() {
    this.TaskList.forEach((task, i) => {
      task.index = i + 1;
    });
  }

  saveToLS() {
    this.setIndex();
    localStorage.setItem('list', JSON.stringify(this.TaskList));
  }

  render() {
    this.saveToLS();
    this.Container.innerHTML = this.TaskList.map(
      (task) => `
  <li class="task-item">
    <label class="checkContainer">
      <input 
        class="checkbox" 
        ${task.completed && 'checked'}
        type="checkbox">
      <span class="check-btn"></span>
    </label>
    <input
      readonly
      class="task-description ${task.completed ? 'scratch' : ''}"
      value="${task.description}">
    <button
      id="delete-Task-Btn${task.index}"
      class="options-icon"
      type"button">
    </button>
  </li>
  `,
    ).join('');
  }
}
const List = new ToDoList(localStorage.getItem('list'));

export default List;

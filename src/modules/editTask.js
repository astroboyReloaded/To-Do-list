import List from './toDoList.js';

class EditTask {
  getDeleteTaskBtn = (i) => {
    this.delteTaskBtn = document.getElementById(`delete-Task-Btn${i + 1}`);
    this.delteTaskBtn.classList.add('delete-Task-Btn');
  };

  deleteTask(i) {
    List.TaskList = List.TaskList.filter((t, index) => index !== i);
    List.render();
  }

  saveEdition(i, input) {
    List.TaskList[i].description = input.value;
    this.disableEdition(input);
  }

  disableEdition(input) {
    input.setAttribute('readonly', true);
    List.render();
  }
}

export default new EditTask();

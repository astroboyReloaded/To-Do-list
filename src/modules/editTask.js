import List from './toDoList.js';

class EditTask {
  getDeleteTaskBtn = (i) => {
    this.dgragBtn = document.getElementById(`drag-btn${i + 1}`);
    this.delteTaskBtn = document.getElementById(`delete-Task-Btn${i + 1}`);
    this.dgragBtn.classList.add('hide');
    this.delteTaskBtn.classList.remove('hide');
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
    this.delteTaskBtn.classList.add('hide');
    this.dgragBtn.classList.remove('hide');
    List.render();
  }
}

export default new EditTask();
